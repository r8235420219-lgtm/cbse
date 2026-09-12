/* ============================================================
   GENDER, RELIGION AND CASTE — interactions & animations
   vanilla JS, zero dependencies
   ============================================================ */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- scroll progress ---------- */
  const bar = $('.scroll-progress');
  function onScroll() {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
    if (bar) bar.style.width = p + '%';
    const nav = $('.nav');
    if (nav) nav.classList.toggle('scrolled', h.scrollTop > 24);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const burger = $('.nav-burger');
  const mobile = $('.mobile-menu');
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      burger.innerHTML = open
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    });
    $$('a', mobile).forEach(a => a.addEventListener('click', () => {
      mobile.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---------- active nav link + dot nav ---------- */
  const sections = $$('section[id], header[id]');
  const navLinks = $$('.nav-link');
  const dotLinks = $$('.dotnav a');
  const spy = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (e.isIntersecting) {
        const id = '#' + e.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
        dotLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-38% 0px -55% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------- back to top ---------- */
  const toTop = $('#to-top');
  if (toTop) {
    onScrollVis();
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }
  function onScrollVis() {
    if (toTop) toTop.classList.toggle('show', window.scrollY > 700);
  }
  document.addEventListener('scroll', onScrollVis, { passive: true });

  /* ---------- 3D tilt (desktop pointer only) ---------- */
  const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduced;
  if (canTilt) {
    $$('.topic-card, .person, .feat-img').forEach(el => {
      el.classList.add('tilt');
      let raf = null;
      el.addEventListener('pointermove', (ev) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = null;
          const r = el.getBoundingClientRect();
          const x = (ev.clientX - r.left) / r.width - 0.5;
          const y = (ev.clientY - r.top) / r.height - 0.5;
          el.style.transform = 'perspective(900px) rotateX(' + (-y * 5).toFixed(2) + 'deg) rotateY(' + (x * 5).toFixed(2) + 'deg) translateY(-4px)';
        });
      });
      el.addEventListener('pointerleave', () => {
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        el.style.transform = '';
      });
    });
  }

  /* ---------- flash-card tap toggle (touch) ---------- */
  $$('.flip').forEach(f => {
    f.addEventListener('click', () => {
      if (window.matchMedia('(hover: hover)').matches) return;
      f.classList.toggle('on');
    });
  });

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- animated counters ---------- */
  function animateNum(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const t0 = performance.now();
    function tick(t) {
      const k = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - k, 4);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (k < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(t0 => tick(t0));
  }
  const cio = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) { animateNum(e.target); cio.unobserve(e.target); } });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* ---------- bar fills (data tables + chart rows) ---------- */
  const bio = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      if (el.classList.contains('hbar')) {
        const i = el.querySelector('i');
        if (i) i.style.width = (el.dataset.value || 0) + '%';
      } else if (el.classList.contains('bc-fill')) {
        el.style.width = (el.dataset.value || 0) + '%';
      } else if (el.classList.contains('donut')) {
        el.classList.add('in');
      }
      bio.unobserve(el);
    });
  }, { threshold: 0.4 });
  $$('.hbar, .bc-fill, .donut').forEach(el => bio.observe(el));

  /* ---------- accordion ---------- */
  $$('.acc-item').forEach(item => {
    const btn = $('.acc-btn', item);
    const body = $('.acc-body', item);
    if (!btn || !body) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      $$('.acc-item.open').forEach(o => {
        o.classList.remove('open');
        $('.acc-body', o).style.maxHeight = '0px';
        $('.acc-btn', o).setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- hero title line reveal ---------- */
  $$('.hero-title .line > span').forEach((sp, i) => {
    sp.style.transition = 'transform 900ms cubic-bezier(0.16,1,0.3,1) ' + (i * 130) + 'ms, opacity 700ms ease ' + (i * 130) + 'ms';
    requestAnimationFrame(() => requestAnimationFrame(() => sp.style.cssText += ';transform:none;opacity:1'));
  });

  /* ============================================================
     QUIZ — 200+ question bank, fully randomized each round
     ============================================================ */
  const BANK = (window.QUIZ_BANK && window.QUIZ_BANK.length) ? window.QUIZ_BANK : [];

  const quizCard  = $('#quiz-app');
  const stageEl   = $('#quiz-stage');
  if (!quizCard || !stageEl || !BANK.length) return;

  const qEl = $('#quiz-q'), optsEl = $('#quiz-opts'), fbEl = $('#quiz-fb'),
        nextBtn = $('#quiz-next'), countEl = $('#quiz-count'),
        progEl = $('#quiz-progress-i'),
        resultEl = $('#quiz-result'), scoreEl = $('#quiz-score'),
        verdictEl = $('#quiz-verdict'), subEl = $('#quiz-sub'),
        retryBtn = $('#quiz-retry'), lenBar = $('.quiz-len');

  let round = [], idx = 0, score = 0, answered = false, roundLen = 15, streak = 0, bestStreak = 0, autoT = null;
  const clearAuto = () => { if (autoT) { clearTimeout(autoT); autoT = null; } };
  const streakEl = $('#quiz-streak'), streakNEl = $('#quiz-streak-n');

  /* Fisher-Yates shuffle — for both questions and options */
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Draw a fresh random round: random questions, each with reshuffled options */
  function drawRound(len) {
    roundLen = Math.min(len, BANK.length);
    const pool = shuffle(BANK.slice()).slice(0, roundLen);
    round = pool.map(src => {
      const order = shuffle(src.o.map((_, i) => i));
      return {
        q: src.q,
        o: order.map(i => src.o[i]),
        a: order.indexOf(src.a),
        w: src.w || ''
      };
    });
  }

  function render() {
    answered = false;
    const item = round[idx];
    qEl.textContent = item.q;
    qEl.style.animation = 'none'; void qEl.offsetWidth;
    qEl.style.animation = 'fade-up 500ms cubic-bezier(0.16,1,0.3,1)';
    optsEl.innerHTML = '';
    fbEl.className = 'quiz-fb'; fbEl.textContent = '';
    nextBtn.style.display = 'none';
    countEl.innerHTML = 'Question <b>' + (idx + 1) + '</b> / ' + roundLen +
      ' &middot; bank of ' + BANK.length;
    progEl.style.width = (idx / roundLen * 100) + '%';

    const keys = ['A', 'B', 'C', 'D'];
    item.o.forEach((txt, i) => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.innerHTML = '<span class="key">' + keys[i] + '</span><span>' + txt + '</span>';
      b.addEventListener('click', () => pick(i, b));
      optsEl.appendChild(b);
    });
  }

  function pick(i, btn) {
    if (answered) return;
    answered = true;
    const item = round[idx];
    const buttons = $$('.opt', optsEl);
    buttons.forEach(b => b.disabled = true);
    let correct = false;
    if (i === item.a) {
      btn.classList.add('correct');
      score++;
      streak++; correct = true;
      if (streak > bestStreak) bestStreak = streak;
      fbEl.textContent = 'Correct! ' + item.w;
      fbEl.classList.add('show', 'good');
    } else {
      btn.classList.add('wrong');
      buttons[item.a].classList.add('correct');
      streak = 0;
      fbEl.textContent = 'Not quite. ' + item.w;
      fbEl.classList.add('show', 'bad');
    }
    if (streakEl) {
      if (streak >= 2) {
        streakEl.classList.add('on');
        if (streakNEl) streakNEl.textContent = streak;
      } else {
        streakEl.classList.remove('on');
      }
    }
    nextBtn.style.display = 'inline-flex';
    const label = idx === roundLen - 1 ? 'See results' : 'Next question';
    nextBtn.innerHTML = label + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    clearAuto();
    autoT = setTimeout(() => nextBtn.click(), correct ? 1500 : 3000);
  }

  function finish() {
    stageEl.style.display = 'none';
    resultEl.classList.add('show');
    const pct = Math.round(score / roundLen * 100);
    scoreEl.textContent = score + '/' + roundLen;
    verdictEl.textContent = pct >= 85 ? 'Outstanding — exam ready!'
      : pct >= 65 ? 'Strong grasp — polish the weak spots.'
      : pct >= 40 ? 'Halfway there — revise the line-by-line blocks.'
      : 'Good start — reread the explanations above.';
    subEl.textContent = 'You answered ' + score + ' of ' + roundLen +
      ' randomly drawn questions correctly (' + pct + '%). Best streak: ' + bestStreak + '.';
    if (streakEl) streakEl.classList.remove('on');

    /* personal best per round length, kept locally */
    try {
      const best = JSON.parse(localStorage.getItem('civics3-best') || '{}');
      const prev = best[roundLen] || 0;
      if (pct > prev) {
        best[roundLen] = pct;
        localStorage.setItem('civics3-best', JSON.stringify(best));
        subEl.textContent += ' New personal best for this length!';
      } else if (prev) {
        subEl.textContent += ' Personal best: ' + prev + '%.';
      }
    } catch (e) { /* storage unavailable — ignore */ }

    progEl.style.width = '100%';
    if (pct >= 60 && !reduced) confetti();
  }

  nextBtn.addEventListener('click', () => {
    clearAuto();
    idx++;
    if (idx < roundLen) { render(); return; }
    finish();
  });

  function startRound(len) {
    clearAuto();
    drawRound(len);
    idx = 0; score = 0; streak = 0; bestStreak = 0;
    if (streakEl) streakEl.classList.remove('on');
    stageEl.style.display = '';
    resultEl.classList.remove('show');
    render();
    quizCard.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }

  retryBtn.addEventListener('click', () => startRound(roundLen));

  /* round-length selector */
  if (lenBar) {
    $$('.len-btn', lenBar).forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.len-btn', lenBar).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        startRound(btn.dataset.len === 'all' ? BANK.length : parseInt(btn.dataset.len, 10));
      });
    });
    /* label the "everything" button with the real bank size */
    const allBtn = $('.len-btn[data-len="all"]', lenBar);
    if (allBtn) allBtn.textContent = 'Full bank \u00b7 ' + BANK.length;
  }

  function confetti() {
    const colors = ['#7c6cff', '#39d0f9', '#ff6ec7', '#ffb24d', '#34e0a1'];
    for (let i = 0; i < 90; i++) {
      const c = document.createElement('i');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = colors[i % colors.length];
      c.style.animation = 'confetti-fall ' + (2.4 + Math.random() * 2.4) + 's linear ' + (Math.random() * 0.8) + 's forwards';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 6200);
    }
  }

  drawRound(15);
  render();
})();
