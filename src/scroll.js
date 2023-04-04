export function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
}
