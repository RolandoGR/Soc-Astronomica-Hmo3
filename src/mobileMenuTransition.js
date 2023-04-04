let navLinks = document.getElementById("navLinks");

export function showMenu() {
  navLinks.style.right = "0";
  return navLinks;
}
export function hideMenu() {
  navLinks.style.right = "-200px";
  return navLinks;
}
