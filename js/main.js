document.addEventListener('DOMContentLoaded', () => {
  // Splash page auto-forward after intro animation while preserving manual entry button.
  if (document.body.classList.contains('splash-page')) {
    window.setTimeout(() => {
      if (!window.location.pathname.endsWith('/home.html')) {
        window.location.href = 'home.html';
      }
    }, 4200);
  }

  // Smooth scrolling for in-page links.
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href.length <= 1) {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Demo form behavior; replace with API integration when endpoint is available.
  const form = document.querySelector('.lead-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you. Your strategic consultation request has been received.');
      form.reset();
    });
  }
});
