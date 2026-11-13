// Shows a readable message if the game cannot start (kept in its own file so the page needs no inline scripts).
window.addEventListener('error', function (e) {
  var l = document.getElementById('loading'), t = document.getElementById('loadText');
  if (l && t && l.style.display !== 'none') t.textContent = 'Sorry, the game could not start (' + (e.message || 'unknown error') + '). Please try a recent browser.';
});

// Keep a copy of the game on this device so later visits start instantly and it works offline.
// Only on the real site (https), never while developing on localhost.
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { /* the game works without it */ }); });
}
