/* ============================================================
   NAV HOME renderer — subject sections with chapter rows
   ============================================================ */
(function () {
  'use strict';
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* chrome */
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
      burger.innerHTML = open
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    });
    $$('a', mobile).forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }
  const spy = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) $$('.dotnav a').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)); });
  }, { rootMargin: '-38% 0px -55% 0px' });
  $$('section[id], header[id]').forEach(s => spy.observe(s));
  const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }), { threshold: 0.08 });
  $$('.reveal').forEach(el => rio.observe(el));

  /* progress store */
  const KEY = 'sci10-revised';
  let revised = {};
  try { revised = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}

  const META = {
    che: { id: 'che', name: 'Chemistry', book: 'Unit I \u00b7 Chemical Substances \u2014 Nature and Behaviour (25 marks)', cls: 'c-che', color: 'var(--amber)', colorHex: '#ffb24d', mark: 'C', secTitle: 'Chemistry' },
    bio: { id: 'bio', name: 'Biology', book: 'Unit II \u00b7 World of Living (25 marks)', cls: 'c-bio', color: 'var(--emerald)', colorHex: '#34e0a1', mark: 'B', secTitle: 'Biology' },
    phy: { id: 'phy', name: 'Physics', book: 'Unit III+IV \u00b7 Natural Phenomena (12) + Effects of Current (13)', cls: 'c-phy', color: 'var(--cyan)', colorHex: '#39d0f9', mark: 'P', secTitle: 'Physics' },
    env: { id: 'env', name: 'Environment', book: 'Unit V \u00b7 Natural Resources (5 marks)', cls: 'c-env', color: 'var(--rose)', colorHex: '#ff5d7a', mark: 'N', secTitle: 'Our Environment' }
  };

  const root = $('#subject-root');
  const total = 16;
  let done = 0;

  Object.values(META).forEach(sub => {
    const chs = window.SUBJECTS[sub.id].chapters;
    let n = 0;
    chs.forEach(slug => { if (revised[slug] === 1) n++; });
    done += n;
    const pct = Math.round(n / chs.length * 100);

    const sec = document.createElement('section');
    sec.id = sub.id;
    if (sub.id === 'bio' || sub.id === 'env') sec.classList.add('section-alt');
    sec.innerHTML = `
      <div class="container">
        <div class="sec-head reveal">
          <span class="sec-mark" aria-hidden="true">${sub.mark}</span>
          <span class="eyebrow" style="color:${sub.colorHex};border-color:${sub.colorHex}55;background:${sub.colorHex}14"><span class="dot"></span> ${sub.book}</span>
          <h2 class="sec-title">${sub.secTitle} <span class="grad">· ${chs.length} chapters</span></h2>
          <p class="sec-lede">Revision points, dates and key terms — each chapter on its own page.</p>
        </div>
        <div class="subj-progress" style="margin-bottom:var(--sp-5)">
          <div class="sp-card" style="--spc:${sub.color}">
            <div class="sp-top"><span class="sp-name" style="color:${sub.colorHex}">${sub.name}</span><span class="sp-count">${n}/${chs.length}</span></div>
            <div class="sp-bar"><i style="width:${pct}%"></i></div>
          </div>
        </div>
        <div class="card chrow-card ${sub.cls}">
          ${chs.map(slug => {
            const c = window.CHAPTERS[slug];
            const isDone = revised[slug] === 1;
            return `<a class="chrow" href="${c.fullSite ? c.fullSite : slug + '.html'}">
              <span class="cr-num">${c.no}</span>
              <span>
                <span class="cr-title">${c.title}</span>
                <div class="cr-sub">${c.tagline}</div>
                ${isDone ? '<span class="cr-done"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg> REVISED</span>' : ''}
              </span>
              <span class="cr-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </a>`;
          }).join('')}
        </div>
      </div>
      <div class="divider" aria-hidden="true"></div>`;
    root.appendChild(sec);
  });

  /* overall progress */
  const pctAll = Math.round(done / total * 100);
  const g = $('#sp-all-bar'); if (g) g.style.width = pctAll + '%';
  const t = $('#sp-all-count'); if (t) t.textContent = done + '/' + total;
  const ring = $('#hero-pct'); if (ring) ring.textContent = pctAll + '%';

  /* re-observe dynamically injected .reveal elements (sections above) */
  $$('.reveal').forEach(el => { if (!el.classList.contains('in')) rio.observe(el); });
})();
