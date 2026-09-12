/* ============================================================
   CHAPTER PAGE renderer — reads data-ch from <body>
   ============================================================ */
(function () {
  'use strict';
  const $ = (s, c) => (c || document).querySelector(s);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const C = window.CHAPTERS[document.body.dataset.ch];
  if (!C) return;

  const SUB = window.SUBJECTS[C.sub];
  const subColor = { che: '#ffb24d', bio: '#34e0a1', phy: '#39d0f9', env: '#ff5d7a' }[C.sub];
  const subName = { che: 'Chemistry', bio: 'Biology', phy: 'Physics', env: 'Biology \u00b7 Environment' }[C.sub];

  /* ---------- chrome ---------- */
  document.title = C.title + ' — Class 10 SST Half-Yearly';
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
  function $$(s, c) { return Array.from((c || document).querySelectorAll(s)); }
  const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }), { threshold: 0.1 });
  $$('.reveal').forEach(el => rio.observe(el));

  /* ---------- hero ---------- */
  const heroCard = $('#ch-hero-card');
  if (heroCard) heroCard.classList.add({ che: 'c-che', bio: 'c-bio', phy: 'c-phy', env: 'c-env' }[C.sub]);
  $('#ch-eyebrow').textContent = subName + ' \u00b7 Chapter ' + C.no;
  $('#ch-eyebrow').style.color = subColor;
  $('#ch-title').textContent = C.title;
  $('#ch-tagline').textContent = C.tagline;
  $('#ch-book').textContent = C.book;

  /* ---------- revision tracking ---------- */
  const KEY = 'sci10-revised';
  let revised = {};
  try { revised = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
  const btn = $('#rev-btn'), card = $('#ch-hero-card');
  function paint() {
    const on = revised[C.slug] === 1;
    btn.classList.toggle('on', on);
    btn.innerHTML = on
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg> Revised'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M12 11v5"/></svg> Mark revised';
  }
  btn.addEventListener('click', () => { revised[C.slug] = revised[C.slug] === 1 ? 0 : 1; paint(); try { localStorage.setItem(KEY, JSON.stringify(revised)); } catch (e) {} });
  paint();

  /* ---------- points / full notes ---------- */
  const ND = (window.NDATA || {})[C.slug] || {};
  const notes = (ND.notes && ND.notes.length) ? ND.notes : C.points;
  const pts = $('#ch-points');
  notes.forEach((p, i) => {
    const el = document.createElement('article');
    el.className = 'lb reveal' + (C.sub === 'che' ? ' lb-amber' : C.sub === 'bio' ? ' lb-emerald' : C.sub === 'phy' ? ' lb-violet' : ' lb-pink');
    el.style.setProperty('--d', (i * 60) + 'ms');
    if (i === 0) el.classList.add('star-note');
    el.innerHTML = '<div class="lb-no">' + (i === 0 ? '\u2605' : String(i + 1).padStart(2, '0')) + '</div>' +
      '<div>' + (i === 0 ? '<span class="must-badge">\u2605 MUST-KNOW \u2014 the chapter crux</span>' : '') +
      '<h3 class="cp-h">' + p.h + '</h3><p class="lb-explain">' + p.b + '</p></div>';
    pts.appendChild(el);
  });

  /* ---------- dates + terms ---------- */
  if (C.dates && C.dates.length) {
    $('#dates-h').textContent = C.sub === 'hist' ? 'Dates that decide answers' : 'Moments to remember';
    const dl = $('#ch-dates');
    C.dates.forEach(d => {
      const el = document.createElement('div');
      el.className = 'datecard reveal';
      el.innerHTML = '<span class="dc-y">' + d.y + '</span><span class="dc-t">' + d.t + '</span>';
      dl.appendChild(el);
    });
  } else { $('#dates-sec').style.display = 'none'; }

  if (C.terms && C.terms.length) {
    const tl = $('#ch-terms');
    C.terms.forEach(t => {
      const el = document.createElement('div');
      el.className = 'gloss-word';
      el.innerHTML = '<span class="gw-dot" style="background:' + subColor + ';color:' + subColor + '"></span>' + t.w +
        '<p class="gw-def">' + t.d + '</p>';
      const wrap = document.createElement('article');
      wrap.className = 'card gloss-card reveal';
      wrap.appendChild(el);
      tl.appendChild(wrap);
    });
  } else { $('#terms-sec').style.display = 'none'; }

  /* ---------- map link ---------- */
  const mapSec = $('#map-sec');
  if (mapSec) {
    if (C.mapCats && C.mapCats.length) {
      $('#map-link').href = 'mapwork.html?cat=' + C.mapCats[0];
      mapSec.style.display = '';
    } else mapSec.style.display = 'none';
  }

  /* ---------- full site banner (pol3) ---------- */
  if (C.fullSite && $('#fullsite-sec')) {
    $('#fullsite-sec').style.display = '';
    $('#fullsite-link').href = C.fullSite;
  }

  /* ---------- chapter photos (from Wikimedia Commons) ---------- */
  const PHOTOS = {
    hist1: [
      { src: 'images/delacroix.jpg', t: 'Liberty Leading the People', c: 'Delacroix\u2019s 1830 painting — the French Revolution\u2019s spirit of la patrie and the citizen' },
      { src: 'images/napoleon.jpg', t: 'Napoleon', c: 'Exported the Civil Code of 1804 across Europe — equality before law, no birth privileges' },
      { src: 'images/bismarck.jpg', t: 'Otto von Bismarck', c: 'Unified Germany by "blood and iron" — proclaimed Kaiserreich at Versailles, 1871' },
      { src: 'images/garibaldi.jpg', t: 'Giuseppe Garibaldi', c: 'The Red Shirts\u2019 general — with Mazzini and Cavour, one of the makers of unified Italy (1861)' }
    ],
    hist2: [
      { src: 'images/saltmarch.jpg', t: 'The Salt March, 1930', c: 'Gandhi walks 240 miles from Sabarmati to Dandi — breaking the salt law launches Civil Disobedience' },
      { src: 'images/jallianwala.jpg', t: 'Jallianwala Bagh', c: 'The Amritsar memorial — 13 April 1919, General Dyer fired on an unarmed crowd' },
      { src: 'images/gandhi.jpg', t: 'Mahatma Gandhi', c: 'Returned in 1915; satyagraha at Champaran, Kheda and Ahmedabad made him a national leader' }
    ],
    hist3: [
      { src: 'images/silkroad.jpg', t: 'The Silk Routes', c: 'For millennia, goods, culture, religion — and germs — moved between East and West' },
      { src: 'images/brettonwoods.jpg', t: 'Bretton Woods, 1944', c: '44 nations created the IMF and World Bank to rebuild the world economy' },
      { src: 'images/containers.jpg', t: 'Container trade', c: 'Cheap container shipping powers today\u2019s MNC-driven globalisation' }
    ],
    hist4: [
      { src: 'images/gutenberg.jpg', t: 'Gutenberg\u2019s press', c: 'Moveable type (~1448) ended 500 years of hand-copied books — the print revolution begins' }
    ],
    geo1: [
      { src: 'images/soilprofile.jpg', t: 'Soil horizons', c: 'Each layer took centuries to form — erosion can destroy it in a season' }
    ],
    geo2: [
      { src: 'images/tiger.jpg', t: 'Royal Bengal tiger', c: 'Project Tiger\u2019s umbrella species — protecting it protects the whole forest' },
      { src: 'images/rhino.jpg', t: 'One-horned rhinoceros', c: 'Kaziranga\u2019s conservation success story' }
    ],
    geo3: [
      { src: 'images/bhakra.jpg', t: 'Bhakra Nangal', c: 'The Sutlej\u2019s giant multipurpose dam — Nehru\u2019s "temple of modern India"' }
    ],
    geo4: [
      { src: 'images/ricefield.jpg', t: 'Paddy cultivation', c: 'Rice — the kharif staple, needing 100+ cm of water' },
      { src: 'images/wheat.jpg', t: 'Wheat harvest', c: 'The rabi crop of the Green Revolution belt' },
      { src: 'images/teagarden.jpg', t: 'Tea garden', c: 'A plantation crop of Assam and the hills — labour-intensive, estate-grown' }
    ],
    geo5: [
      { src: 'images/coalmine.jpg', t: 'Open-cast mining', c: 'Coal — the fossil fuel behind ~68% of India\u2019s electricity' },
      { src: 'images/windfarm.jpg', t: 'Wind power', c: 'Non-conventional energy: India is among the world\u2019s top wind producers' }
    ],
    pol1: [
      { src: 'images/brussels.jpg', t: 'Brussels, Belgium', c: 'Capital of a country held together by the Belgian model of power sharing' }
    ],
    pol2: [
      { src: 'images/parliament.jpg', t: 'Sansad Bhavan', c: 'The Union level of India\u2019s three-tier federal democracy' },
      { src: 'images/shg.jpg', t: 'Local self-government', c: 'The 73rd/74th Amendments made panchayats and municipalities the third tier' }
    ],
    pol4: [
      { src: 'images/voter.jpg', t: 'The voter decides', c: 'Parties compete for this mandate — the heart of representative democracy' },
      { src: 'images/parliament.jpg', t: 'In the House', c: 'Legislatures run on party lines — governments need majorities, oppositions need voice' }
    ],
    eco1: [
      { src: 'images/kochi.jpg', t: 'Kerala', c: 'High human development with moderate income — public facilities at work' }
    ],
    eco2: [
      { src: 'images/ricefield.jpg', t: 'Primary sector', c: 'Agriculture still employs over half of India\u2019s workers' },
      { src: 'images/itpark.jpg', t: 'Tertiary sector', c: 'Software parks drive India\u2019s service-led growth' }
    ],
    eco3: [
      { src: 'images/rupees.jpg', t: 'The rupee', c: 'Money as medium of exchange — an end to barter\u2019s double coincidence of wants' },
      { src: 'images/rbi.jpg', t: 'Reserve Bank of India', c: 'Issues currency and supervises the formal credit system' },
      { src: 'images/shg.jpg', t: 'Self-Help Groups', c: 'Pooling small savings — creditworthiness without collateral' }
    ],
    eco4: [
      { src: 'images/containers.jpg', t: 'Global trade', c: 'Container terminals connect Indian producers to world markets' },
      { src: 'images/itpark.jpg', t: 'Services go global', c: 'IT and BPO exports — India\u2019s globalisation success story' }
    ]
  };
  const photos = PHOTOS[C.slug];

  /* ---------- textbook, line by line (verbatim NCERT blocks + decodes) ---------- */
  var TL = (window.TEXTLINES || {})[C.slug];
  if (TL && TL.length) {
    var DC = (window.DECODE || {})[C.slug] || {};
    var lbSec = document.createElement('section');
    lbSec.id = 'lines-sec';
    var explCount = Object.keys(DC).length;
    lbSec.innerHTML =
      '<div class="container">' +
        '<div class="sec-head reveal">' +
          '<span class="eyebrow c-violet"><span class="dot"></span> Textbook, line by line</span>' +
          '<h2 class="sec-title">Every paragraph, <span class="grad">decoded</span></h2>' +
          '<p class="sec-lede">The complete NCERT text of this chapter, in order \u2014 each block followed by its plain-English explanation.</p>' +
        '</div>' +
        '<div class="lines-filter" role="group" aria-label="Filter lines">' +
          '<button class="lf-btn on" data-f="all">' + TL.length + ' lines \u00b7 all</button>' +
          '<button class="lf-btn" data-f="expl">' + explCount + ' decoded</button>' +
        '</div>' +
        '<div class="lineblock" id="lines-list">' +
          TL.map(function (txt, i) {
            var e = DC[i];
            return '<article class="lb lb-violet reveal rv-left' + (e ? ' has-expl' : ' raw') + '" data-expl="' + (e ? '1' : '0') + '">' +
              '<div class="lb-no">' + String(i + 1).padStart(2, '0') + '</div>' +
              '<div>' +
                '<p class="lb-ncert">' + txt + '</p>' +
                (e ? '<p class="lb-explain">' + e + '</p>' : '') +
              '</div>' +
            '</article>';
          }).join('') +
        '</div>' +
      '</div>';
    /* insert right after the notes section (before photos/dates) */
    var pointsSec = $('#points');
    if (pointsSec && pointsSec.nextElementSibling) {
      pointsSec.parentNode.insertBefore(lbSec, pointsSec.nextElementSibling);
    } else { $('main').appendChild(lbSec); }
    /* divider after notes gets pushed below; add one after this section too */
    var div = document.createElement('div');
    div.className = 'divider';
    div.setAttribute('aria-hidden', 'true');
    lbSec.parentNode.insertBefore(div, lbSec.nextSibling);
    $$('.lf-btn', lbSec).forEach(function (btn) {
      btn.addEventListener('click', function () {
        $$('.lf-btn', lbSec).forEach(function (b) { b.classList.toggle('on', b === btn); });
        var f = btn.dataset.f;
        $$('.lb', lbSec).forEach(function (el) {
          el.style.display = (f === 'all' || el.dataset.expl === '1') ? '' : 'none';
        });
      });
    });
  }

  if (photos && photos.length) {
    const sec = document.createElement('section');
    sec.className = 'section-alt';
    sec.innerHTML =
      '<div class="container">' +
        '<div class="sec-head reveal">' +
          '<span class="eyebrow c-cyan"><span class="dot"></span> Picture this</span>' +
          '<h2 class="sec-title">The chapter, <span class="grad">in pictures</span></h2>' +
        '</div>' +
        '<div class="photogrid">' +
          photos.map(function (p) {
            return '<figure class="photo-card reveal rv-zoom">' +
              '<img src="' + p.src + '" alt="' + p.t + '" loading="lazy">' +
              '<figcaption class="ph-cap"><b>' + p.t + '</b>' + p.c + '</figcaption>' +
            '</figure>';
          }).join('') +
        '</div>' +
      '</div>';
    var insertAt = $('#dates-sec');
    if (insertAt) insertAt.parentNode.insertBefore(sec, insertAt);
    else $('main').appendChild(sec);
  }

  /* ---------- written practice + case-based + rapid revision ---------- */
  const WR = (window.WRITTEN || {})[C.slug];

  if (WR && WR.qs && WR.qs.length) {
    /* --- written practice (1/2/3/5-mark) --- */
    const marks = {};
    WR.qs.forEach(x => { (marks[x.m] = marks[x.m] || []).push(x.q); });
    const wsec = document.createElement('section');
    wsec.className = 'section-alt';
    wsec.innerHTML =
      '<div class="container">' +
        '<div class="sec-head reveal">' +
          '<span class="eyebrow c-amber"><span class="dot"></span> Written practice</span>' +
          '<h2 class="sec-title">Board-pattern <span class="grad">questions</span></h2>' +
          '<p class="sec-lede">Exactly how the paper asks them \u2014 attempt in writing, time yourself. Starred questions are NCERT exercise classics.</p>' +
        '</div>' +
        Object.keys(marks).sort().map(function (m) {
          return '<div class="card card-pad written-block reveal">' +
            '<div class="wb-head"><span class="mark-chip m' + m + '">' + m + ' mark' + (m > 1 ? 's' : '') + '</span>' +
            '<span class="wb-count">' + marks[m].length + ' question' + (marks[m].length > 1 ? 's' : '') + '</span></div>' +
            '<ol class="wb-list">' + marks[m].map(function (q) { return '<li>' + q + '</li>'; }).join('') + '</ol>' +
          '</div>';
        }).join('') +
      '</div>';
    var datesSec = $('#dates-sec');
    if (datesSec) datesSec.parentNode.insertBefore(wsec, datesSec);
    else $('main').appendChild(wsec);

    /* --- case-based competency --- */
    if (WR.case) {
      var csec = document.createElement('section');
      csec.innerHTML =
        '<div class="container">' +
          '<div class="sec-head reveal">' +
            '<span class="eyebrow c-pink"><span class="dot"></span> Case-based \u00b7 competency question</span>' +
            '<h2 class="sec-title">Read the case, <span class="grad">answer the set</span></h2>' +
          '</div>' +
          '<div class="card card-pad case-card reveal rv-zoom">' +
            '<p class="case-text">' + WR.case.t + '</p>' +
            WR.case.qs.map(function (cq, ci) {
              return '<div class="case-q" data-a="' + cq.a + '">' +
                '<p class="cq-t"><b>Q' + (ci + 1) + '.</b> ' + cq.q + '</p>' +
                '<div class="case-opts">' + cq.o.map(function (o, oi) {
                  return '<button class="copt" data-i="' + oi + '">' + String.fromCharCode(65 + oi) + '. ' + o + '</button>';
                }).join('') + '</div>' +
                '<p class="cwhy">' + cq.w + '</p>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';
      if (datesSec) datesSec.parentNode.insertBefore(csec, datesSec);
      else $('main').appendChild(csec);
      $$('.case-q', csec).forEach(function (block) {
        var ans = parseInt(block.dataset.a, 10);
        $$('.copt', block).forEach(function (btn) {
          btn.addEventListener('click', function () {
            var i = parseInt(btn.dataset.i, 10);
            $$('.copt', block).forEach(function (b) { b.disabled = true; b.classList.remove('correct', 'wrong'); });
            btn.classList.add(i === ans ? 'correct' : 'wrong');
            $$('.copt', block)[ans].classList.add('correct');
            block.classList.add('answered');
          });
        });
      });
    }

    /* --- rapid revision box (end of chapter) --- */
    var rsec = document.createElement('section');
    rsec.style.paddingTop = 'var(--sp-5)';
    var topDates = (C.dates || []).slice(0, 5).map(function (d) {
      return '<span class="rr-chip"><b>' + d.y + '</b> ' + d.t + '</span>';
    }).join('');
    var terms = (C.terms || []).slice(0, 6).map(function (t) {
      return '<span class="rr-chip rr-term">' + t.w + '</span>';
    }).join('');
    rsec.innerHTML =
      '<div class="container">' +
        '<div class="rapid-box reveal rv-zoom">' +
          '<div class="rb-head">' +
            '<span class="rb-ico">\u26A1</span>' +
            '<div><h3>60-second rapid revision</h3><p>Read this in the corridor before the bell.</p></div>' +
          '</div>' +
          '<p class="rb-text">' + (notes[0] ? notes[0].b : '') + '</p>' +
          (topDates ? '<div class="rr-row"><span class="rr-label">Dates</span>' + topDates + '</div>' : '') +
          (terms ? '<div class="rr-row"><span class="rr-label">Terms</span>' + terms + '</div>' : '') +
          '<div class="rb-actions"><a class="btn btn-primary" href="#chq-sec">Now test yourself \u2192</a></div>' +
        '</div>' +
      '</div>';
    var pn = $('#prev-nav');
    if (pn) pn.closest('section').parentNode.insertBefore(rsec, pn.closest('section'));
    else $('main').appendChild(rsec);
  }

  /* ---------- CRITICAL: re-observe dynamically created .reveal elements ----------
     The observer above ran before notes/dates/terms were injected, leaving them
     stuck at opacity:0. Observe everything that now exists. */
  $$('.reveal').forEach(el => { if (!el.classList.contains('in')) rio.observe(el); });
  /* safety: anything already in view but missed gets revealed immediately */
  setTimeout(() => {
    $$('.reveal').forEach(el => {
      if (el.classList.contains('in')) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
    });
  }, 250);

  /* ---------- chapter quiz (from NDATA bank) ---------- */
  const qStage = $('#chq-stage');
  if (qStage && ND.quiz && ND.quiz.length) {
    const qEl = $('#chq-q'), optsEl = $('#chq-opts'), fbEl = $('#chq-fb'),
      nextBtn = $('#chq-next'), countEl = $('#chq-count'), progEl = $('#chq-prog'),
      resultEl = $('#chq-result'), scoreEl = $('#chq-score'), verdictEl = $('#chq-verdict'),
      subEl = $('#chq-sub'), retryBtn = $('#chq-retry');
    $('#chq-title').textContent = ND.quiz.length + ' questions';

    const roundLen = Math.min(15, ND.quiz.length);
    let round = [], qi = 0, qscore = 0, answered = false, autoT = null;
    const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
    const clearAuto = () => { if (autoT) { clearTimeout(autoT); autoT = null; } };

    function drawRound() {
      round = shuffle(ND.quiz.slice()).slice(0, roundLen).map(src => {
        const order = shuffle(src.o.map((_, i) => i));
        return { q: src.q, o: order.map(i => src.o[i]), a: order.indexOf(src.a), w: src.w || '' };
      });
      qi = 0; qscore = 0;
    }

    function renderQ() {
      answered = false;
      const item = round[qi];
      qEl.textContent = item.q;
      qEl.style.animation = 'none'; void qEl.offsetWidth; qEl.style.animation = 'fade-up 500ms cubic-bezier(0.16,1,0.3,1)';
      optsEl.innerHTML = '';
      fbEl.className = 'quiz-fb'; fbEl.textContent = '';
      nextBtn.style.display = 'none';
      countEl.innerHTML = 'Question <b>' + (qi + 1) + '</b> / ' + roundLen + ' &middot; bank of ' + ND.quiz.length;
      progEl.style.width = (qi / roundLen * 100) + '%';
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
      const item = round[qi];
      const buttons = $$('.opt', optsEl);
      buttons.forEach(b => b.disabled = true);
      let correct = false;
      if (i === item.a) {
        btn.classList.add('correct'); qscore++; correct = true;
        fbEl.textContent = 'Correct! ' + item.w;
        fbEl.classList.add('show', 'good');
      } else {
        btn.classList.add('wrong');
        buttons[item.a].classList.add('correct');
        fbEl.textContent = 'Not quite. ' + item.w;
        fbEl.classList.add('show', 'bad');
      }
      nextBtn.style.display = 'inline-flex';
      nextBtn.innerHTML = (qi === roundLen - 1 ? 'See results' : 'Next question') +
        ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
      /* auto-advance: quicker when correct, slower to read the explanation when wrong */
      clearAuto();
      autoT = setTimeout(() => nextBtn.click(), correct ? 1500 : 3000);
    }

    nextBtn.addEventListener('click', () => {
      clearAuto();
      qi++;
      if (qi < roundLen) { renderQ(); return; }
      qStage.style.display = 'none';
      resultEl.classList.add('show');
      const pct = Math.round(qscore / roundLen * 100);
      scoreEl.textContent = qscore + '/' + roundLen;
      verdictEl.textContent = pct >= 80 ? 'Outstanding — exam ready!' : pct >= 60 ? 'Solid grasp — polish the weak spots.' : 'Good start — revise the notes above.';
      subEl.textContent = 'You answered ' + qscore + ' of ' + roundLen + ' randomly drawn questions correctly (' + pct + '%).';
      progEl.style.width = '100%';
    });

    retryBtn.addEventListener('click', () => {
      clearAuto();
      drawRound();
      resultEl.classList.remove('show');
      qStage.style.display = '';
      renderQ();
    });

    drawRound();
    renderQ();
  } else if (qStage) {
    qStage.closest('section').style.display = 'none';
  }

  /* ---------- prev / next ---------- */
  const order = [].concat(window.SUBJECTS.che.chapters, window.SUBJECTS.bio.chapters, window.SUBJECTS.phy.chapters, window.SUBJECTS.env.chapters);
  const i = order.indexOf(C.slug);
  const prev = order[i - 1], next = order[i + 1];
  var prevA = $('#prev-nav'), nextA = $('#next-nav');
  if (prev) {
    if (prevA) { prevA.href = prev + '.html'; $('#prev-title').textContent = window.CHAPTERS[prev].title; }
  } else if (prevA) prevA.style.display = 'none';
  if (next) {
    if (nextA) { nextA.href = next + '.html'; $('#next-title').textContent = window.CHAPTERS[next].title; }
  } else if (nextA) nextA.style.display = 'none';
})();
