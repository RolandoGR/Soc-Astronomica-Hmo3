import { index } from "./index.js";
import { aboutUs } from "./aboutUs";
import { activities } from "./activities";
import { newsSection } from "./news";
import { imageOfTheDay } from "./imageOfDay";
import logo from "./img/logosahuaro.png";
import { hideMenu, showMenu } from "./mobileMenuTransition";
import { scrollToSection } from "./scroll";

export function navigation() {
  // create navigation element
  const nav = document.createElement("nav");
  // create navigation logo and text elements
  const navLogo = document.createElement("div");
  navLogo.classList.add("nav-logo");
  const logoImage = document.createElement("img");
  logoImage.src = logo;
  logoImage.addEventListener("click", (event) => {
    event.preventDefault();
    index();
  });

  const textLink = document.createElement("a");
  textLink.href = "index.html";
  const navText = document.createElement("div");
  navText.classList.add("nav-text");
  navText.textContent = "Sociedad Astronómica de Hermosillo";
  textLink.appendChild(navText);
  navLogo.appendChild(logoImage);

  // create navigation links
  const navLinks = document.createElement("div");
  navLinks.classList.add("nav-links");
  navLinks.id = "navLinks";
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-xmark");
  closeIcon.addEventListener("click", (event) => {
    event.preventDefault();
    hideMenu(navLinks);
  });
  const menuIcon = document.createElement("i");
  menuIcon.classList.add("fa-solid", "fa-bars");
  menuIcon.addEventListener("click", (event) => {
    event.preventDefault();
    showMenu(navLinks);
  });
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const link1 = document.createElement("a");
  link1.href = "#";
  link1.textContent = "Actividades";
  link1.addEventListener("click", (event) => {
    event.preventDefault();
    activities();
  });
  li1.appendChild(link1);
  const li2 = document.createElement("li");
  const link2 = document.createElement("a");
  link2.href = "#";
  link2.textContent = "Noticias";
  link2.addEventListener("click", (event) => {
    event.preventDefault();
    newsSection();
  });
  li2.appendChild(link2);
  const li3 = document.createElement("li");
  const link3 = document.createElement("a");
  link3.href = "#";
  link3.textContent = "Imagen del día";
  link3.addEventListener("click", (event) => {
    event.preventDefault();
    imageOfTheDay();
  });
  li3.appendChild(link3);
  const li4 = document.createElement("li");
  const link4 = document.createElement("a");
  link4.href = "#";

  link4.textContent = "Galería";
  li4.appendChild(link4);
  const li5 = document.createElement("li");
  const link5 = document.createElement("a");
  link5.href = "#";
  link5.textContent = "Regístrate";
  li5.appendChild(link5);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  navLinks.appendChild(closeIcon);
  navLinks.appendChild(ul);

  // append elements to nav
  nav.appendChild(navLogo);
  nav.appendChild(menuIcon);
  nav.appendChild(navLinks);

  return nav;
}
