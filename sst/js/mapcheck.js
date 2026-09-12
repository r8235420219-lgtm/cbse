/* ============================================================
   MAP CHECKER — decluttered engine (mapwork.html)
   learn · locate · identify · draw (pen) — with zoom & pan
   one category at a time · hover tooltips · region blobs
   ============================================================ */
(function () {
  'use strict';
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- page chrome ---------- */
  const bar = $('.scroll-progress'), nav = $('.nav'), toTop = $('#to-top');
  function onScroll() {
    const h = document.documentElement;
    if (bar) bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    if (nav) nav.classList.toggle('scrolled', h.scrollTop > 24);
    if (toTop) toTop.classList.toggle('show', window.scrollY > 700);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
  const burger = $('.nav-burger'), mobile = $('.mobile-menu');
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
    $$('a', mobile).forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }
  const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }), { threshold: 0.1 });
  $$('.reveal').forEach(el => rio.observe(el));

  /* ---------- map checker ---------- */
  const ITEMS = window.MAP_ITEMS || [];
  const stage = $('#map-stage');
  const zoomer = $('#map-zoomer') || stage;
  if (!stage) return;

  const LEFT = 67, RIGHT = 99, TOP = 37.5, BOTTOM = 5;
  const toXY = (lat, lng) => ({ x: (lng - LEFT) / (RIGHT - LEFT) * 100, y: (TOP - lat) / (TOP - BOTTOM) * 100 });
  const toLatLng = (fx, fy) => ({ lat: TOP - fy * (TOP - BOTTOM), lng: LEFT + fx * (RIGHT - LEFT) });
  const distKm = (a, b) => {
    const dLat = (a.lat - b.lat) * 111;
    const dLng = (a.lng - b.lng) * 111 * Math.cos((a.lat + b.lat) / 2 * Math.PI / 180);
    return Math.sqrt(dLat * dLat + dLng * dLng);
  };

  const CATS = [
    { id: 'history',   label: 'History · Movement' },
    { id: 'dams',      label: 'Dams' },
    { id: 'minerals',  label: 'Mines & Fields' },
    { id: 'power',     label: 'Power Plants' },
    { id: 'steel',     label: 'Steel Plants' },
    { id: 'industry',  label: 'Textiles & IT' },
    { id: 'transport', label: 'Ports & Airports' },
    { id: 'crops',     label: 'Crops' },
    { id: 'soils',     label: 'Soils' },
    { id: 'parks',     label: 'Parks (bonus)' }
  ];
  const REGION_CATS = new Set(['crops', 'soils']);
  const isRegion = it => REGION_CATS.has(it.cat);

  /* default: history; support ?cat= deep link */
  const params = new URLSearchParams(location.search);
  const catParam = params.get('cat');
  let activeCat = CATS.some(c => c.id === catParam) ? catParam : 'history';
  let mode = 'learn';
  let session = null;
  let autoT = null;
  const clearAuto = () => { if (autoT) { clearTimeout(autoT); autoT = null; } };
  const autoNext = (delay) => {
    clearAuto();
    autoT = setTimeout(() => {
      const b = $('#map-actions .map-btn');
      if (b && b.textContent.indexOf('Next question') !== -1) b.click();
    }, delay);
  };

  const promptEl = $('#mp-q'), subEl = $('#mp-sub'), hintEl = $('#mp-hint'),
    fbEl = $('#map-fb'), scoreEl = $('#map-score'), streakEl = $('#map-streak'),
    qCountEl = $('#map-count'), listEl = $('#learn-list'), panelActions = $('#map-actions'),
    catBar = $('#cat-bar');

  const pool = () => ITEMS.filter(it => it.cat === activeCat);
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  const catLabel = id => (CATS.find(c => c.id === id) || {}).label || id;

  /* ============================================================
     ZOOM & PAN — transform on #map-zoomer (origin 0 0)
     s = scale · (tx, ty) = translate px. Clamped so no gaps show.
     ============================================================ */
  let s = 1, tx = 0, ty = 0;
  const S_MIN = 1, S_MAX = 5;
  const applyT = () => {
    zoomer.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + s + ')';
    stage.classList.toggle('zoomed', s > 1);
    stage.style.touchAction = (s > 1 || mode === 'draw') ? 'none' : 'pan-y';
    const z = $('#zoom-level');
    if (z) z.textContent = Math.round(s * 100) + '%';
  };
  const clamp = () => {
    const W = stage.clientWidth, H = stage.clientHeight;
    if (s <= 1) { s = 1; tx = 0; ty = 0; return; }
    if (s > S_MAX) s = S_MAX;
    tx = Math.max(W - W * s, Math.min(0, tx));
    ty = Math.max(H - H * s, Math.min(0, ty));
  };
  const setZoom = (ns, cx, cy) => {           /* zoom keeping (cx,cy) stage-pixels stable */
    const W = stage.clientWidth, H = stage.clientHeight;
    cx = cx == null ? W / 2 : cx; cy = cy == null ? H / 2 : cy;
    const px = (cx - tx) / s, py = (cy - ty) / s;
    s = Math.max(S_MIN, Math.min(S_MAX, ns));
    tx = cx - px * s; ty = cy - py * s;
    clamp(); applyT();
  };
  const resetZoom = () => { s = 1; tx = 0; ty = 0; clamp(); applyT(); };

  const zoomIn = $('#zoom-in'), zoomOut = $('#zoom-out'), zoomReset = $('#zoom-reset');
  if (zoomIn) zoomIn.addEventListener('click', e => { e.stopPropagation(); setZoom(s * 1.4); });
  if (zoomOut) zoomOut.addEventListener('click', e => { e.stopPropagation(); setZoom(s / 1.4); });
  if (zoomReset) zoomReset.addEventListener('click', e => { e.stopPropagation(); resetZoom(); });
  stage.addEventListener('dblclick', e => {
    e.preventDefault();
    const r = stage.getBoundingClientRect();
    setZoom(s >= S_MAX ? 1 : s * 1.6, e.clientX - r.left, e.clientY - r.top);
  });

  /* ---------- pointer gestures: pan (zoomed) & pinch ---------- */
  const pointers = new Map();       /* pointerId -> {x, y} */
  let dragMoved = false, pinchStart = null;
  const DRAG_TOL = 7;

  stage.addEventListener('pointerdown', ev => {
    pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (pointers.size === 2) {
      const [a, b] = Array.from(pointers.values());
      const r = stage.getBoundingClientRect();
      pinchStart = {
        dist: Math.hypot(a.x - b.x, a.y - b.y), s,
        mid: { x: (a.x + b.x) / 2 - r.left, y: (a.y + b.y) / 2 - r.top },
        tx, ty
      };
    }
  });
  stage.addEventListener('pointermove', ev => {
    if (!pointers.has(ev.pointerId)) return;
    const prev = pointers.get(ev.pointerId);
    pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });

    if (pointers.size === 2 && pinchStart) {           /* pinch zoom */
      const [a, b] = Array.from(pointers.values());
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d > 10 && pinchStart.dist > 10) {
        const ns = pinchStart.s * (d / pinchStart.dist);
        const W = stage.clientWidth, H = stage.clientHeight;
        const px = (pinchStart.mid.x - pinchStart.tx) / pinchStart.s;
        const py = (pinchStart.mid.y - pinchStart.ty) / pinchStart.s;
        s = Math.max(S_MIN, Math.min(S_MAX, ns));
        tx = pinchStart.mid.x - px * s; ty = pinchStart.mid.y - py * s;
        clamp(); applyT();
      }
      dragMoved = true;
      return;
    }
    if (s > 1 && mode !== 'draw') {                     /* pan when zoomed */
      tx += ev.clientX - prev.x; ty += ev.clientY - prev.y;
      clamp(); applyT();
    }
    if (Math.hypot(ev.clientX - prev.x, ev.clientY - prev.y) > 1) dragMoved = true;
  });
  const endPointer = ev => { pointers.delete(ev.pointerId); if (pointers.size < 2) pinchStart = null; };
  stage.addEventListener('pointerup', ev => {
    endPointer(ev);
    setTimeout(() => { dragMoved = false; }, 60);       /* reset AFTER click fires */
  });
  stage.addEventListener('pointercancel', endPointer);
  stage.addEventListener('pointerleave', ev => { if (!ev.buttons) endPointer(ev); });

  /* ============================================================
     PEN — freehand drawing on a canvas overlay (draw mode)
     strokes stored normalised (0-1) so they survive zoom/resize
     ============================================================ */
  const canvas = $('#pen-canvas'), cctx = canvas ? canvas.getContext('2d') : null;
  let strokes = [], cur = null, penColor = '#39d0f9';
  const PEN_COLORS = ['#39d0f9', '#ffd24d', '#34e0a1', '#ff5d7a', '#ffffff'];

  function sizeCanvas() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = zoomer.clientWidth, h = zoomer.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redrawPen();
  }
  function redrawPen() {
    if (!cctx) return;
    const w = zoomer.clientWidth, h = zoomer.clientHeight;
    cctx.clearRect(0, 0, w, h);
    cctx.lineCap = 'round'; cctx.lineJoin = 'round';
    const all = cur ? strokes.concat([cur]) : strokes;
    all.forEach(st => {
      if (st.pts.length < 2) return;
      cctx.strokeStyle = st.color; cctx.lineWidth = st.w;
      cctx.beginPath();
      cctx.moveTo(st.pts[0][0] * w, st.pts[0][1] * h);
      st.pts.forEach(p => cctx.lineTo(p[0] * w, p[1] * h));
      cctx.stroke();
    });
  }
  const penAt = ev => {
    const r = canvas.getBoundingClientRect();
    return [(ev.clientX - r.left) / r.width, (ev.clientY - r.top) / r.height];
  };
  if (canvas) {
    canvas.addEventListener('pointerdown', ev => {
      if (mode !== 'draw') return;
      ev.preventDefault();
      canvas.setPointerCapture(ev.pointerId);
      cur = { color: penColor, w: Math.max(2, zoomer.clientWidth / 260), pts: [penAt(ev)] };
      redrawPen();
    });
    canvas.addEventListener('pointermove', ev => {
      if (!cur) return;
      cur.pts.push(penAt(ev));
      redrawPen();
    });
    const endStroke = () => {
      if (!cur) return;
      if (cur.pts.length > 1) strokes.push(cur);
      cur = null; redrawPen();
    };
    canvas.addEventListener('pointerup', endStroke);
    canvas.addEventListener('pointercancel', endStroke);
  }
  const penBar = $('#pen-bar');
  if (penBar) {
    PEN_COLORS.forEach((col, i) => {
      const b = document.createElement('button');
      b.className = 'pen-color' + (i === 0 ? ' on' : '');
      b.style.background = col;
      b.setAttribute('aria-label', 'Pen colour ' + col);
      b.addEventListener('click', () => {
        penColor = col;
        $$('.pen-color', penBar).forEach(x => x.classList.toggle('on', x === b));
      });
      penBar.appendChild(b);
    });
    const undo = document.createElement('button');
    undo.className = 'pen-btn'; undo.textContent = 'Undo';
    undo.addEventListener('click', () => { strokes.pop(); redrawPen(); });
    penBar.appendChild(undo);
    const clr = document.createElement('button');
    clr.className = 'pen-btn'; clr.textContent = 'Clear';
    clr.addEventListener('click', () => { strokes = []; redrawPen(); });
    penBar.appendChild(clr);
  }

  /* ---------- markers ---------- */
  function clearMap() { $$('.mk, .map-click', zoomer).forEach(el => el.remove()); }

  function addMarker(it, cls, label, tip) {
    const p = toXY(it.lat, it.lng);
    const m = document.createElement('div');
    m.className = 'mk ' + (isRegion(it) && !label ? 'blob ' : '') + (cls || '');
    m.style.left = p.x + '%'; m.style.top = p.y + '%';
    m.style.animationDelay = (Math.random() * 200) + 'ms';
    if (p.y < 14) m.classList.add('tip-b');
    const tipText = tip || (it.n + ' — ' + it.s);
    m.innerHTML = (label ? label : '') + '<span class="mk-tip">' + tipText + '</span>';
    zoomer.appendChild(m);
    return m;
  }

  function clickPing(fx, fy) {
    const c = document.createElement('div');
    c.className = 'map-click';
    c.style.left = (fx * 100) + '%'; c.style.top = (fy * 100) + '%';
    zoomer.appendChild(c);
    setTimeout(() => c.remove(), 750);
  }

  /* ---------- category tabs (single-select) ---------- */
  CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'cat-chip' + (c.id === activeCat ? ' on' : '');
    b.textContent = c.label;
    b.addEventListener('click', () => {
      clearAuto();
      activeCat = c.id;
      $$('.cat-chip', catBar).forEach(x => x.classList.toggle('on', x === b));
      history.replaceState(null, '', 'mapwork.html?cat=' + c.id);
      if (mode === 'learn') renderLearn(); else if (mode === 'draw') renderDraw(); else startPractice(mode);
    });
    catBar.appendChild(b);
  });

  /* ---------- learn mode ---------- */
  let learnSel = null;
  function renderLearn() {
    clearMap();
    stage.classList.add('learn');
    const items = pool();
    items.forEach(it => addMarker(it));
    listEl.innerHTML = '';
    items.forEach((it, i) => {
      const row = document.createElement('div');
      row.className = 'learn-item';
      row.innerHTML = '<span class="li-n">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span><span class="li-name">' + it.n + '</span><div class="li-sub">' + it.s + '</div></span>';
      const sync = () => {
        $$('.learn-item', listEl).forEach(r => r.classList.remove('sel'));
        row.classList.add('sel');
        $$('.mk', zoomer).forEach(m => m.classList.remove('pulse', 'sel'));
        const mk = $$('.mk', zoomer)[i];
        if (mk) { mk.classList.add('pulse', 'sel'); }
        learnSel = it;
      };
      row.addEventListener('mouseenter', sync);
      row.addEventListener('click', sync);
      listEl.appendChild(row);
    });
    promptEl.textContent = 'Learn mode · ' + catLabel(activeCat);
    subEl.textContent = items.length + ' prescribed locations';
    hintEl.innerHTML = 'Hover or tap any list entry to spotlight it on the map. Master these, then switch to <b>Locate</b> or <b>Identify</b>.';
    fbEl.className = 'map-fb'; fbEl.textContent = '';
    scoreEl.textContent = '—'; streakEl.textContent = '—'; qCountEl.textContent = '—';
    renderActions('learn');
  }

  /* ---------- draw mode ---------- */
  function renderDraw() {
    clearMap();
    stage.classList.add('learn');
    listEl.innerHTML = '';
    promptEl.textContent = 'Draw mode · blank practice';
    subEl.textContent = 'Mark, shade and label by hand';
    hintEl.innerHTML = 'Practise like the exam: <b>zoom in</b>, then draw dots, shades and arrows with the pen. Pick a colour, <b>Undo</b> or <b>Clear</b> as needed. Nothing is scored — switch to <b>Locate</b> to test.';
    fbEl.className = 'map-fb'; fbEl.textContent = '';
    scoreEl.textContent = '—'; streakEl.textContent = '—'; qCountEl.textContent = '—';
    renderActions('draw');
    sizeCanvas();
  }

  /* ---------- practice ---------- */
  function startPractice(kind) {
    clearAuto();
    const items = pool();
    if (items.length < 4) { hintEl.innerHTML = '<b>Not enough items in this category.</b>'; return; }
    mode = kind;
    const N = Math.min(10, items.length);
    const qs = shuffle(items.slice()).slice(0, N).map(it => ({ it }));
    session = { qs, i: 0, score: 0, streak: 0, best: 0, locked: false };
    stage.classList.remove('learn');
    renderQuestion();
  }

  function renderQuestion() {
    clearMap();
    fbEl.className = 'map-fb'; fbEl.textContent = '';
    session.locked = false;
    const { it } = session.qs[session.i];
    qCountEl.textContent = (session.i + 1) + '/' + session.qs.length;
    scoreEl.textContent = session.score;
    streakEl.textContent = session.streak ? '×' + session.streak : '0';

    if (mode === 'locate') {
      promptEl.textContent = 'Where is ' + it.n + '?';
      subEl.textContent = catLabel(activeCat);
      hintEl.innerHTML = 'Click the correct spot on the map. Tolerance ≈ <b>' + Math.round(it.tol * 111) + ' km</b>' + (isRegion(it) ? ' — it\u2019s a region, aim for its centre.' : '') + '. Zoom in for tight spots.';
      renderActions('locate');
    } else {
      const decoys = shuffle(pool().filter(x => x !== it)).slice(0, 4);
      const five = shuffle([it].concat(decoys));
      session.qs[session.i].opts = five;
      five.forEach((x, i) => addMarker(x, '', String(i + 1)));
      promptEl.textContent = 'Which dot is ' + it.n + '?';
      subEl.textContent = catLabel(activeCat);
      hintEl.innerHTML = 'Click the <b>numbered dot</b> that marks ' + it.n + '.';
      renderActions('identify');
    }
  }

  function answer(fx, fy, clickedIdx) {
    if (!session || session.locked) return;
    session.locked = true;
    const { it, opts } = session.qs[session.i];
    let correct = false, msg = '';

    if (mode === 'locate') {
      const click = toLatLng(fx, fy);
      const km = distKm(click, it);
      correct = km <= it.tol * 111;
      clearMap();
      addMarker(it, 'green');
      if (correct) {
        msg = 'Correct — ' + it.n + ' (' + it.s + '). You were ' + Math.round(km) + ' km away.';
      } else {
        addMarker({ lat: click.lat, lng: click.lng }, 'red', '✕');
        msg = 'That was ' + Math.round(km) + ' km off. Green shows the correct spot: ' + it.n + ' — ' + it.s + '.';
      }
    } else {
      const target = opts.findIndex(o => o === it);
      clearMap();
      opts.forEach((o, i) => addMarker(o, i === target ? 'green' : (i === clickedIdx ? 'red' : 'dim'), String(i + 1)));
      correct = clickedIdx === target;
      msg = correct
        ? 'Correct — ' + it.n + ' is dot ' + (target + 1) + ' (' + it.s + ').'
        : 'Dot ' + (clickedIdx + 1) + ' is ' + opts[clickedIdx].n + '. ' + it.n + ' is dot ' + (target + 1) + ': ' + it.s + '.';
    }

    if (correct) { session.score++; session.streak++; session.best = Math.max(session.best, session.streak); }
    else session.streak = 0;
    scoreEl.textContent = session.score;
    streakEl.textContent = session.streak ? '×' + session.streak : '0';

    fbEl.textContent = msg;
    fbEl.className = 'map-fb show ' + (correct ? 'good' : 'bad');

    if (session.i + 1 >= session.qs.length) {
      clearAuto();
      hintEl.innerHTML = '<b>Session complete!</b> Score ' + session.score + '/' + session.qs.length +
        ' · best streak ×' + session.best + '. Another round, or switch category.';
      renderActions('done');
    } else {
      renderActions('answered');
      autoNext(correct ? 2200 : 4200);
    }
  }

  function renderActions(state) {
    panelActions.innerHTML = '';
    const mkBtn = (txt, cls, fn) => {
      const b = document.createElement('button');
      b.className = 'map-btn' + (cls ? ' ' + cls : '');
      b.textContent = txt;
      b.addEventListener('click', () => { clearAuto(); fn(); });
      panelActions.appendChild(b);
    };
    if (state === 'learn') {
      mkBtn('Play Locate', 'primary', () => startPractice('locate'));
      mkBtn('Play Identify', '', () => startPractice('identify'));
    } else if (state === 'draw') {
      mkBtn('Play Locate', 'primary', () => startPractice('locate'));
      mkBtn('Back to Learn', '', () => { mode = 'learn'; renderLearn(); });
    } else if (state === 'answered') {
      mkBtn('Next question', 'primary', () => { session.i++; renderQuestion(); });
      mkBtn('Restart', '', () => startPractice(mode));
    } else if (state === 'done') {
      mkBtn('Play again', 'primary', () => startPractice(mode));
      mkBtn('Back to Learn', '', () => { mode = 'learn'; renderLearn(); });
    } else if (state === 'locate') {
      mkBtn('Skip', '', () => {
        const { it } = session.qs[session.i];
        session.locked = true;
        clearMap(); addMarker(it, 'gold pulse');
        fbEl.textContent = 'Skipped — ' + it.n + ' (' + it.s + ').';
        fbEl.className = 'map-fb show bad';
        if (session.i + 1 >= session.qs.length) renderActions('done'); else renderActions('answered');
      });
    } else if (state === 'identify') {
      mkBtn('Reveal', '', () => {
        const { it, opts } = session.qs[session.i];
        session.locked = true;
        clearMap();
        const t = opts.findIndex(o => o === it);
        opts.forEach((o, i) => addMarker(o, i === t ? 'gold pulse' : 'dim', String(i + 1)));
        fbEl.textContent = it.n + ' is dot ' + (t + 1) + ' (' + it.s + ').';
        fbEl.className = 'map-fb show bad';
        session.streak = 0; streakEl.textContent = '0';
        if (session.i + 1 >= session.qs.length) renderActions('done'); else renderActions('answered');
      });
    }
  }

  /* ---------- map clicks ---------- */
  stage.addEventListener('click', (ev) => {
    if (mode === 'learn' || mode === 'draw') return;
    if (!session || session.locked) return;
    if (dragMoved) { dragMoved = false; return; }      /* was a pan/pinch gesture */
    const r = zoomer.getBoundingClientRect();
    const fx = (ev.clientX - r.left) / r.width;
    const fy = (ev.clientY - r.top) / r.height;
    if (fx < 0 || fx > 1 || fy < 0 || fy > 1) return;

    if (mode === 'locate') {
      if (!reduced) clickPing(fx, fy);
      answer(fx, fy);
    } else {
      const mks = $$('.mk', zoomer);
      let hit = -1, best = 1e9;
      mks.forEach((m, i) => {
        const mx = parseFloat(m.style.left) / 100, my = parseFloat(m.style.top) / 100;
        const d = Math.hypot(mx - fx, my - fy);
        if (d < best) { best = d; hit = i; }
      });
      if (hit >= 0 && best < 0.045) answer(null, null, hit);
    }
  });

  /* ---------- mode tabs ---------- */
  $$('.mode-tab').forEach(t => t.addEventListener('click', () => {
    clearAuto();
    $$('.mode-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    mode = t.dataset.mode;
    document.body.classList.toggle('drawing', mode === 'draw');
    if (canvas) canvas.classList.toggle('on', mode === 'draw');
    if (mode === 'learn') { session = null; renderLearn(); }
    else if (mode === 'draw') { session = null; renderDraw(); }
    else startPractice(mode);
    applyT();                                          /* touch-action refresh */
  }));

  /* ---------- boot ---------- */
  window.addEventListener('resize', () => { sizeCanvas(); clamp(); applyT(); });
  sizeCanvas();
  applyT();
  renderLearn();
})();
