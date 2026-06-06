const cards = document.querySelectorAll('.service-card, .testimonial-card, .hero-card');
const observerOptions = {
  threshold: 0.18,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(22px)';
  card.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
  revealObserver.observe(card);
});

const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach((link, index) => {
  link.style.transitionDelay = `${index * 0.08}s`;
});
