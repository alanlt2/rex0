// Smooth scroll when clicking sidebar items
document.querySelectorAll('.nav li').forEach(li => {
  li.addEventListener('click', () => {
    const id = li.dataset.target;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Highlight active section while scrolling
const navItems = document.querySelectorAll('.nav li');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(li => {
    li.classList.remove("active");
    if (li.dataset.target === current) {
      li.classList.add("active");
    }
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.2 } // triggers when 20% of section is visible
);

// Apply fade-in to all sections
document.querySelectorAll(".section").forEach(section => {
  section.classList.add("fade-in");
  observer.observe(section);
});

