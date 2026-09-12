/* Build js/textlines_*.js from texts/*.txt — verbatim NCERT paragraph blocks, cleaned.
   Usage: node tools/build_textlines.js */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const SUBJECTS = [
  { pre: 'hist', out: 'textlines_hist.js' },
  { pre: 'geo', out: 'textlines_geo.js' },
  { pre: 'pol', out: 'textlines_pol.js' },
  { pre: 'eco', out: 'textlines_eco.js' }
];

const TITLES = {
  hist1: 'The Rise of Nationalism in Europe', hist2: 'Nationalism in India',
  hist3: 'The Making of a Global World', hist4: 'Print Culture and the Modern World',
  geo1: 'Resources and Development', geo2: 'Forest and Wildlife Resources',
  geo3: 'Water Resources', geo4: 'Agriculture', geo5: 'Minerals and Energy Resources',
  pol1: 'Power Sharing', pol2: 'Federalism', pol4: 'Political Parties',
  eco1: 'Development', eco2: 'Sectors of the Indian Economy',
  eco3: 'Money and Credit', eco4: 'Globalisation and the Indian Economy'
};

const FIX = [
  [/inter active/g, 'interactive'], [/envir onment/g, 'environment'],
  [/way s\b/g, 'ways'], [/I NDIA/g, 'INDIA'], [/resourc es/g, 'resources'],
  [/sustainab le/g, 'sustainable'], [/develop ment/g, 'development'],
  [/govern ment/g, 'government'], [/parlia ment/g, 'parliament'],
  [/communit y/g, 'community'], [/national ism/g, 'nationalism'],
  [/cultur al/g, 'cultural'], [/economi c/g, 'economic'], [/ecologi cal/g, 'ecological'],
  [/tech nological/g, 'technological'], [/agricultur al/g, 'agricultural'],
  [/institutio ns/g, 'institutions'], [/environm ent/g, 'environment'],
  [/\btem ple\b/g, 'temple'], [/res pective/g, 'respective'],
  [/everyda y/g, 'everyday'], [/somewher e/g, 'somewhere'],
  [/whatso ever/g, 'whatsoever'], [/certain ly/g, 'certainly'],
  [/conferenc es/g, 'conferences'], [/smallpo x/g, 'smallpox']
];

const JUNK = [
  /^=+\s*PAGE\s+\d+\s*=+$/i,
  /^Rationalised[-\s]/i,
  /^\d{1,3}$/,
  /^(CONTEMPORARY|INDIA|II|I|DEMOCRATIC|POLITICS|UNDERSTANDING|ECONOMIC|DEVELOPMENT)$/i
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
    if (/^Fig\.\s|^\d+\.\d+\s|^(Source|Activity)\s*:|^Box\s/i.test(l)) { flush(); return; }   /* captions & boxes */
    if (/^\u2018?\(?[a-d]\)/.test(l)) { cur.push(l); return; }                                 /* list items */
    cur.push(l);
    const joined = cur.join(' ');
    if (/[.!?]["'”)\]]?$/.test(l) && joined.length > 420) flush();
  });
  flush();
  /* merge fragments starting lowercase into previous */
  const merged = [];
  paras.forEach(p => {
    if (merged.length && /^[a-z]/.test(p)) merged[merged.length - 1] += ' ' + p;
    else merged.push(p);
  });
  return merged.map(fixArtifacts).filter(p => p.length > 100 && /^[A-Z\u2018\u201c0-9]/.test(p));
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
  /* absorb tiny tails */
  if (out.length > 1 && out[out.length - 1].length < 140) {
    const tail = out.pop();
    out[out.length - 1] += ' ' + tail;
  }
  return out;
}

SUBJECTS.forEach(sub => {
  const files = fs.readdirSync(path.join(ROOT, 'texts')).filter(f => f.startsWith(sub.pre) && f.endsWith('.txt')).sort();
  const data = { __TITLES: {} };
  files.forEach(f => {
    const key = f.replace('.txt', '');
    const raw = fs.readFileSync(path.join(ROOT, 'texts', f), 'utf8');
    let blocks = paragraphs(raw).map(stripLeadingCaps).flatMap(chunk);
    /* absorb stray short fragments into the previous block */
    const merged = [];
    blocks.forEach(b => {
      if (merged.length && b.length < 150) merged[merged.length - 1] += ' ' + b;
      else merged.push(b);
    });
    blocks = merged.filter(b => b.length > 120);
    /* drop activity questions & trivia-only lines */
    blocks = blocks.filter(b => !/^(Can you|Do you|Try to|Collect|Visit|Look at|Find out|Imagine|Fill in|Tick the|Answer the following)/i.test(b) || b.length > 200);
    /* drop teacher-notes / journal fluff (pol & eco texts) and header fragments */
    blocks = blocks.filter(b =>
      !/NOTES FOR THE TEACHER|Sources for Information|Students could be asked|You may encourage|While elaborating the ideas|The present situation in India, where newer|What would happen when the government declares|Hence, digital transactions started|Credit is a crucial element in economic life|We need to emphasise that this is a right|If we look at the past thirty years|You can also creatively use|The final section covers|The call for a fairer globalisation has been given|Another important issue to be highlighted|The data for this chapter is taken from reports|The GVA data used in this chapter|The employment figures are based on data|The data on formal and informal sector credit|It is necessary for you to expect|How can countries or states be compared|An economy is best understood|Development has many aspects|Money is a fascinating subject and full of curiosities|Most regions of the world are getting increas|Globalisation has been facilitated by several factors|Similarly, international negotiations under WTO/i.test(b) &&
      !/^Chapter \d+\.?\s*indd/i.test(b) &&
      !/^[0-9]+\s*(UUUU|SSSS|EEEE|CCCC|MMMM|DDDD|GGGG|LLLL|IIII|TTTT|RRRR|PPPP)/i.test(b)
    );
    data[key] = blocks;
    data.__TITLES[key] = TITLES[key] || key;
    console.log(key, blocks.length, 'blocks');
  });
  const out = '/* AUTO-GENERATED verbatim NCERT paragraph blocks (from texts/*.txt) */\n' +
    '(function () {\n  window.TEXTLINES = window.TEXTLINES || {};\n' +
    '  var D = ' + JSON.stringify(data) + ';\n' +
    '  Object.keys(D).forEach(function (k) { if (k !== "__TITLES") window.TEXTLINES[k] = D[k]; });\n' +
    '  window.TEXTLINES.__TITLES = D.__TITLES;\n})();\n';
  fs.writeFileSync(path.join(ROOT, 'js', sub.out), out);
});
console.log('done');
