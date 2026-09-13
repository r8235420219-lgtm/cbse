/* Theme toggle — day (editorial print) is default; night restores base dark theme */
(function () {
  var KEY = 'cbse10-theme';
  function apply(mode) {
    var h = document.documentElement;
    h.classList.toggle('day', mode === 'day');
    h.classList.toggle('night', mode === 'night');
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', mode === 'day' ? 'Switch to night mode' : 'Switch to day mode');
      btn.innerHTML = mode === 'day'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    }
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === 'night' ? 'night' : 'day');

  function mount() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle';
      btn.className = 'theme-btn';
      var nav = document.querySelector('.nav-links');
      if (nav && nav.parentNode) {
        nav.parentNode.insertBefore(btn, nav.nextSibling);
      } else {
        var nv = document.querySelector('.nav');
        if (nv) nv.appendChild(btn);
      }
    }
    var mode = document.documentElement.classList.contains('night') ? 'night' : 'day';
    apply(mode);
    btn.addEventListener('click', function () {
      mode = document.documentElement.classList.contains('night') ? 'day' : 'night';
      apply(mode);
      try { localStorage.setItem(KEY, mode); } catch (e) {}
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
