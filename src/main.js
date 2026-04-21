import './style.css';

// Mobile menu toggle
const mobileMenuButton = document.querySelector('button');
const mobileMenu = document.querySelector('.md\\:flex');

if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
