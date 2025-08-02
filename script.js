window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;

  sections.forEach(section => {
    if (scrollY > section.offsetTop - 300) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});
