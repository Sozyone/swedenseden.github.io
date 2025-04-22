document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Smooth scroll for all in-page links
  navLinks.forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  // Highlight active link on scroll (only works on pages with multiple sections)
  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`
      );
    });
  });
});
