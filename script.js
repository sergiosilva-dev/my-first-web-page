const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

const navLinks = document.querySelectorAll("nav a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
  },
);

document.querySelectorAll("section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

const toggleButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});
