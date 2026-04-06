document.querySelectorAll('.acc-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    var panelId = btn.getAttribute('aria-controls');

    // Close all
    document.querySelectorAll('.acc-btn').forEach(function(b) {
      b.setAttribute('aria-expanded', 'false');
      b.querySelector('.acc-icon').textContent = '+';
      b.closest('.acc-item').classList.remove('is-open');
    });
    document.querySelectorAll('.acc-panel').forEach(function(p) {
      p.classList.remove('open');
    });

    // Open clicked if it was closed
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('.acc-icon').textContent = '\u00d7';
      btn.closest('.acc-item').classList.add('is-open');
      document.getElementById(panelId).classList.add('open');
    }
  });
});
