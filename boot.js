// Shows a readable message if the game cannot start (kept in its own file so the page needs no inline scripts).
window.addEventListener('error', function (e) {
  var l = document.getElementById('loading'), t = document.getElementById('loadText');
  if (l && t && l.style.display !== 'none') t.textContent = 'Sorry, the game could not start (' + (e.message || 'unknown error') + '). Please try a recent browser.';
});
