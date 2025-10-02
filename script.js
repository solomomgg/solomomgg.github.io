// Fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(fader => observer.observe(fader));
});

// Dropdown toggle
document.querySelector('.dropbtn').addEventListener('click', () => {
  const dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicking outside
window.addEventListener('click', e => {
  const dropdown = document.querySelector('.dropdown-content');
  const dropbtn = document.querySelector('.dropbtn');
  if (!dropbtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});
