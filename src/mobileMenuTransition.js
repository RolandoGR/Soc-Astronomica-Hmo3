const navLinks = document.getElementById("navLinks");

export function showMenu(navLinks) {
  navLinks.style.right = "0";
  return navLinks;
}
export function hideMenu(navLinks) {
  navLinks.style.right = "-200px";
  return navLinks;
}
