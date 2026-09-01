// Injects a small "back to the hub" strip into a game page.
// Self-contained (styles included) so each game stays a single drop-in file
// that still works when opened directly from disk.

(function () {
  var css = document.createElement('style');
  css.textContent =
    '.hs-back{' +
      'position:fixed;top:10px;left:10px;z-index:9999;' +
      'display:inline-flex;align-items:center;gap:6px;' +
      'font:500 12px/1 Inter,system-ui,sans-serif;letter-spacing:.01em;' +
      'text-decoration:none;color:#21201C;' +
      'background:rgba(250,246,236,0.88);backdrop-filter:blur(6px);' +
      '-webkit-backdrop-filter:blur(6px);' +
      'border:1px solid rgba(33,32,28,0.22);border-radius:100px;' +
      'padding:7px 13px 7px 10px;' +
      'box-shadow:0 2px 10px -4px rgba(0,0,0,.35);' +
      'opacity:.62;transition:opacity .15s ease,transform .15s ease;' +
    '}' +
    '.hs-back:hover,.hs-back:focus-visible{opacity:1;transform:translateY(-1px);outline:none;}' +
    '.hs-back b{font-weight:600;}' +
    '@media print{.hs-back{display:none;}}';
  document.head.appendChild(css);

  var a = document.createElement('a');
  a.className = 'hs-back';
  a.href = '../index.html';
  a.innerHTML = '← <b>Hot Seat</b>';
  a.title = 'Back to all games';

  // On wide screens the strip floats in the left gutter beside the centred
  // content. On narrow ones there is no gutter, so reserve room for it.
  var basePad = null;

  function fit() {
    if (basePad === null) {
      basePad = parseFloat(getComputedStyle(document.body).paddingTop) || 0;
    }
    var content = document.querySelector('.wrap') || document.body.firstElementChild;
    var left = content ? content.getBoundingClientRect().left : 0;
    var clears = left >= (a.offsetWidth + 24);
    document.body.style.paddingTop = (clears ? basePad : basePad + 40) + 'px';
  }

  function mount() {
    document.body.appendChild(a);
    fit();
    window.addEventListener('resize', fit);
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
