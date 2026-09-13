/* eqn.js — auto-detect chemical equations, formulas and math expressions in
   rendered text and wrap them in .fx (STIX Two Text). Handles <sub> tags via
   placeholders: flattened for matching, restored when unwrapped, converted to
   real subscripts inside styled spans. Single pass, English-word safe. */
(function () {
  'use strict';

  var SUB_L = '\uE000', SUB_R = '\uE001';   /* placeholder sentinels */

  /* digit run: plain digits or a <sub>digits</sub> placeholder */
  var D = '(?:' + SUB_L + '\\d+' + SUB_R + '|\\d+)';

  /* formula fragment: element tokens with optional paren groups + hydrates */
  var F = '(?:' + D + '\\s?)?(?:[A-Z][a-z]?' + D + '?|\\((?:[A-Z][a-z]?' + D + '?)+\\)' + D + '?)+(?:\\((?:[A-Z][a-z]?' + D + '?)+\\)' + D + '?)*(?:\\u00b7(?:\\d*[A-Za-z0-9\\u00bd]+))*(?:[\\u2193\\u2191])?';

  /* full equations: A + B \u2192 C + D */
  var EQN = '(' + F + '(?:\\s*\\+\\s*' + F + ')*\\s*)(?:\\u2192|->|\\u21cc)\\s*(' + F + '(?:\\s*\\+\\s*' + F + ')*)';

  /* lone formulas: 2+ element tokens; wrapped only if they contain a digit
     (H2O, Fe2O3) or a two-letter token (NaCl, NaOH) — English acronyms fail */
  var FORM = '\\b(?:[A-Z][a-z]?' + D + '?){2,}(?:\\u00b7(?:\\d*[A-Za-z0-9\u00bd' + SUB_L + SUB_R + ']+))?(?!' + SUB_L + ')(?=[^A-Za-z0-9]|$)';

  /* math: I²Rt, V²/R, 3.6 × 10⁶, 10⁻¹⁹, m = –v/u, 1/f, R/2, P = 1/f */
  var MATH = '\\b[A-Z]\\u00b2[A-Za-z\\\\/]{0,5}\\b|\\b\\d+(?:\\.\\d+)?\\s*\\u00d7\\s*10[\\u2070-\\u2079\\u207b\\u00b2\\u00b3\\u00b9]*|(?<![a-zA-Z])[a-zA-Z0-9]\\s*\\/\\s*[a-zA-Z]\\b|\\b[a-zA-Z]\\s*=\\s*[\\u2013-]?\\s*[a-zA-Z0-9]\\s*\\/\\s*[a-zA-Z0-9]\\b';

  var MASTER = new RegExp(EQN + '|' + FORM + '|' + MATH, 'g');

  function isFormulaOk(m) {
    var s = m.replace(new RegExp(SUB_L + '(\\d+)' + SUB_R, 'g'), '$1');
    if (/\d/.test(s)) return true;          /* H2O, CO2, Fe2O3 */
    if (/[A-Z][a-z]/.test(s)) return true;  /* NaCl, NaOH, HCl */
    return false;                            /* USA, IIT, PM — skip */
  }

  /* inside a styled span: strip placeholders, subscript digit runs that
     follow element letters / closing parens (coefficients stay upright) */
  function subscriptDigits(s) {
    s = s.replace(new RegExp(SUB_L + '(\\d+)' + SUB_R, 'g'), '$1');
    return s.replace(/([A-Za-z\u2193\u2191\)])(\d+)/g, '$1<sub>$2</sub>');
  }

  function wrapText(text) {
    return text.replace(MASTER, function (m) {
      if (m.length < 2) return m;
      if (/\u2192|->|\u21cc/.test(m)) return '<span class="fx chem-eq">' + m.replace(/->/g, '\u2192') + '</span>';
      if (/^[A-Z]/.test(m) && !/[\s=\u00d7\/]/.test(m) && !/\d/.test(m)) {
        return isFormulaOk(m) ? '<span class="fx">' + m + '</span>' : m;
      }
      if (/^[A-Z]/.test(m) && !/[\s=\u00d7\/]/.test(m) && SUB_L === m[1]) {
        /* single token with placeholder subscript (F2, Q1) — leave bare */
        return m;
      }
      return '<span class="fx">' + m + '</span>';
    });
  }

  function wrapHtml(html) {
    /* flatten <sub>digits</sub> to placeholder sentinels for matching */
    html = html.replace(/<sub>(\d+)<\/sub>/g, SUB_L + '$1' + SUB_R);
    if (html.indexOf('<') === -1) return finish(wrapText(html));
    var out = '', buf = '', inTag = false;
    for (var i = 0; i < html.length; i++) {
      var ch = html[i];
      if (!inTag && ch === '<') {
        if (buf) { out += wrapText(buf); buf = ''; }
        inTag = true; out += ch;
      } else if (inTag) {
        out += ch;
        if (ch === '>') inTag = false;
      } else {
        buf += ch;
      }
    }
    if (buf) out += wrapText(buf);
    return finish(out);
  }

  /* post-pass: subscript digits inside styled spans; restore untouched subs */
  function finish(html) {
    html = html.replace(/(<span class="fx[^"]*">)([^<]*)<\/span>/g, function (_, open, body) {
      return open + subscriptDigits(body) + '</span>';
    });
    return html.replace(new RegExp(SUB_L + '(\\d+)' + SUB_R, 'g'), '<sub>$1</sub>');
  }

  function processEl(el) {
    if (el.dataset && el.dataset.eqnDone) return;
    if (el.dataset) el.dataset.eqnDone = '1';
    if (el.children.length === 0) {
      var h = el.innerHTML;
      if (h && (/[A-Z][a-z]?[0-9]/.test(h) || /[A-Z][a-z][A-Z]/.test(h) || /[\u2192\u21cc\u00d7\u00b2\u2070-\u2079]/.test(h) || /[a-zA-Z0-9]\s*\/\s*[a-zA-Z]/.test(h))) {
        var w = wrapHtml(h);
        if (w !== h) el.innerHTML = w;
      }
    } else {
      for (var k = 0; k < el.children.length; k++) processEl(el.children[k]);
    }
  }

  var SEL = '.lb-ncert, .lb-explain, .cp-h, .quiz-q, .quiz-fb, .cwhy, .act-body li, .act-body p, .case-text, .cq-t, .wb-list li, .gw-def, .dc-t, .dtable td, .dtable th, figcaption, .rb-text, .sec-lede, .hero-lede, .term-d, .note div';

  function run() {
    if (!document.querySelectorAll) return;
    var nodes = document.querySelectorAll(SEL);
    for (var i = 0; i < nodes.length; i++) processEl(nodes[i]);
  }

  if (typeof window !== 'undefined') {
    try { window.__wrapHtml = wrapHtml; } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  setTimeout(run, 400);
  setTimeout(run, 1200);
})();
