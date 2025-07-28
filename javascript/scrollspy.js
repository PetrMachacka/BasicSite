document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar__link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const navItem = document.querySelector(`.navbar__link[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        navItem.classList.add("active");
      }
    });
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // když je sekce z 50 % ve viewportu
  });

  sections.forEach(section => observer.observe(section));
});
