document.addEventListener('DOMContentLoaded', () => {
  // Dropdown toggle
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdown = document.querySelector('.dropdown-content');
  dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });

  // FAQ accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    });
  });

  // Fade-in sections
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
});
