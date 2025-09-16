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
    const sectionTop = section.offsetTop - 80; // offset for header spacing
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