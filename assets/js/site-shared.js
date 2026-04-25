(function () {
  function toggleMenu() {
    var nav = document.getElementById('nav-links');
    if (nav) nav.classList.toggle('open');
  }

  function openEbookModal() {
    var modal = document.getElementById('ebook-modal');
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeEbookModal() {
    var modal = document.getElementById('ebook-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  function bindEbookModal() {
    var modal = document.getElementById('ebook-modal');
    if (!modal) return;

    modal.addEventListener('click', closeEbookModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeEbookModal();
    });
  }

  window.toggleMenu = toggleMenu;
  window.openEbookModal = openEbookModal;
  window.closeEbookModal = closeEbookModal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindEbookModal);
  } else {
    bindEbookModal();
  }
})();
