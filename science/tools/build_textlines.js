/* Build js/textlines_*.js from texts/*.txt — verbatim NCERT/CBSE-RM paragraph blocks, cleaned.
   Usage: node tools/build_textlines.js */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const SUBJECTS = [
  { pre: 'che', out: 'textlines_che.js' },
  { pre: 'bio', out: 'textlines_bio.js' },
  { pre: 'phy', out: 'textlines_phy.js' },
  { pre: 'env', out: 'textlines_env.js' }
];

const TITLES = {
  che1: 'Chemical Reactions and Equations', che2: 'Acids, Bases and Salts',
  che3: 'Metals and Non-metals', che4: 'Carbon and its Compounds',
  che5: 'Periodic Classification of Elements',
  bio1: 'Life Processes', bio2: 'Control and Coordination',
  bio3: 'How do Organisms Reproduce?', bio4: 'Heredity', bio5: 'Evolution',
  phy1: 'Light — Reflection and Refraction', phy2: 'The Human Eye and the Colourful World',
  phy3: 'Electricity', phy4: 'Magnetic Effects of Electric Current',
  phy5: 'Electric Motor, EMI and Generator',
  env1: 'Our Environment'
};

const FIX = [
  [/ envir onment /g, ' environment '], [/envir onment/g, 'environment'],
  [/reacti on/g, 'reaction'], [/com pound/g, 'compound'],
  [/\bh ydrogen\b/gi, 'hydrogen'], [/hydroge n/g, 'hydrogen'],
  [/oxyg en/g, 'oxygen'], [/carbo n/g, 'carbon'],
  [/electri c/g, 'electric'], [/magnet ic/g, 'magnetic'],
  [/ N C E R T /g, ' NCERT '], [/A B C D/g, 'ABCD']
];

const JUNK = [
  /^=+\s*PAGE\s+\d+\s*=+$/i,
  /^Rationalised[-\s]/i,
  /^Chapter\s+\d+(\.\w+)?$/i,
  /^\d{1,3}$/,
  /^(SCIENCE|TEXTBOOK|FOOTPRINTS|FIRST FLIGHT|WORDS AND EXPRESSIONS)$/i,
  /^\d+\s*(GG|EE|SS|CC|MM)$/i
];
const isJunk = l => JUNK.some(r => r.test(l));

function fixArtifacts(s) {
  FIX.forEach(([r, v]) => { s = s.replace(r, v); });
  return s.replace(/\s+([,.;:!?])/g, '$1').replace(/([,.;:!?])(?=[A-Za-z])/g, '$1 ').replace(/\s+/g, ' ').trim();
}

/* assemble paragraphs from hard-wrapped lines */
function paragraphs(txt) {
  const lines = txt.split('\n').map(l => l.replace(/\s+/g, ' ').trim()).filter(l => l.length > 0);
  const paras = [];
  let cur = [];
  const flush = () => {
    if (!cur.length) return;
    const p = cur.join(' ');
    if (p.length > 80) paras.push(p);
    cur = [];
  };
  lines.forEach(l => {
    if (isJunk(l)) return;
    if (/^Fig\.?\s|^Table\s|^Activity\s|^Example\s|^Case Study\s|^Box\s|^\(\s*Fig\.|^More to Know/i.test(l)) { flush(); return; }
    if (/^(Q\s*\d+|Question[s]?\s*[:\d]|^\(?[a-d]\))/i.test(l)) { flush(); return; }   /* questions & list items */
    cur.push(l);
    const joined = cur.join(' ');
    if (/[.!?]["'”)\]]?$/.test(l) && joined.length > 420) flush();
  });
  flush();
  const merged = [];
  paras.forEach(p => {
    if (merged.length && /^[a-z(]/.test(p)) merged[merged.length - 1] += ' ' + p;
    else merged.push(p);
  });
  return merged.map(fixArtifacts).filter(p => p.length > 100 && /^[A-Z\u2018\u201c0-9(]/.test(p));
}

function stripLeadingCaps(p) {
  p = p.replace(/(Reprint \d{4}-\d{2}\s*)+/g, '').trim();
  const toks = p.split(' ');
  let i = 0;
  while (i < toks.length && i < 10) {
    const t = toks[i].replace(/[^A-Za-z–&-]/g, '');
    if (t.length > 0 && t === t.toUpperCase() && /[A-Z]/.test(t)) i++;
    else break;
  }
  return i >= 2 ? toks.slice(i).join(' ') : p;
}

/* split a long paragraph at sentence ends into ≤ ~650-char blocks */
function chunk(p) {
  if (p.length <= 650) return [p];
  const parts = p.match(/[^.!?]+[.!?]+["'”)\]]*|[^.!?]+$/g) || [p];
  const out = [];
  let buf = '';
  parts.forEach(sp => {
    if ((buf + sp).length > 650 && buf) { out.push(buf.trim()); buf = sp; }
    else buf += sp;
  });
  if (buf.trim()) out.push(buf.trim());
  if (out.length > 1 && out[out.length - 1].length < 140) {
    const tail = out.pop();
    out[out.length - 1] += ' ' + tail;
  }
  return out;
}

SUBJECTS.forEach(sub => {
  const files = fs.readdirSync(path.join(ROOT, 'texts')).filter(f => f.startsWith(sub.pre) && f.endsWith('.txt') && !f.startsWith('jesc')).sort();
  const data = { __TITLES: {} };
  files.forEach(f => {
    const key = f.replace('.txt', '');
    const raw = fs.readFileSync(path.join(ROOT, 'texts', f), 'utf8');
    let blocks = paragraphs(raw).map(stripLeadingCaps).flatMap(chunk);
    const merged = [];
    blocks.forEach(b => {
      if (merged.length && b.length < 150) merged[merged.length - 1] += ' ' + b;
      else merged.push(b);
    });
    blocks = merged.filter(b => b.length > 120);
    /* drop exercise/question-only fragments and page furniture */
    blocks = blocks.filter(b =>
      !/^(Can you|Do you|Try to|Collect|Visit|Look at|Find out|Imagine|Fill in|Tick the|Answer the following|What you have learnt|In the next chapter|In this chapter|Let us (recall|begin)|A Note|Glossary|Summary|Index$)/i.test(b) &&
      !/^\d+\s*\.\s*(Can you|What|Why|How|Which|When|Name|Define|Explain|Draw|State|Give|List|Differentiate|Compare|Calculate)/i.test(b)
    );
    data[key] = blocks;
    data.__TITLES[key] = TITLES[key] || key;
    console.log(key, blocks.length, 'blocks');
  });
  const out = '/* AUTO-GENERATED verbatim NCERT/CBSE-RM paragraph blocks (from texts/*.txt) */\n' +
    '(function () {\n  window.TEXTLINES = window.TEXTLINES || {};\n' +
    '  var D = ' + JSON.stringify(data) + ';\n' +
    '  Object.keys(D).forEach(function (k) { if (k !== "__TITLES") window.TEXTLINES[k] = D[k]; });\n' +
    '  window.TEXTLINES.__TITLES = D.__TITLES;\n})();\n';
  fs.writeFileSync(path.join(ROOT, 'js', sub.out), out);
});
console.log('done');
