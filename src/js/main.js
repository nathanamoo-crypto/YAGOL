document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 YAGOL site loaded successfully!");
  
  // Mobile nav toggle
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav-links');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('hidden');
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

