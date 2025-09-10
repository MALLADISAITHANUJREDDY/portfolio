// Smooth scrolling effect
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Small animation on scroll
const cards = document.querySelectorAll('.project-card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardPos = card.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (cardPos < screenPos) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});
