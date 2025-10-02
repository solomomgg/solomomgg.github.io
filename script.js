// Fade-in sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Dropdown toggle for mobile
document.querySelector('.dropbtn').addEventListener('click', () => {
  const dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicking outside
window.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.dropdown-content');
  const dropbtn = document.querySelector('.dropbtn');
  
  if (!dropbtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});
