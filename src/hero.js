import { scrollToSection } from "./scroll";
export function hero() {
  // get body element
  const content = document.getElementById("content");
  // create hero section
  const hero = document.createElement("section");
  hero.classList.add("hero");

  // create text-box element
  const textBox = document.createElement("div");
  textBox.classList.add("text-box");
  const h1 = document.createElement("h1");
  h1.textContent = "Sociedad Astronómica de Hermosillo";
  const p1 = document.createElement("p");
  p1.textContent = "Cielos despejados en el noroeste de México";
  const p2 = document.createElement("p");
  const link6 = document.createElement("button");
  //link6.href = "#";
  link6.classList.add("hero-btn");
  link6.textContent = "Conoce más sobre nosotros";
  link6.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("section.aboutUs");
  });

  p2.appendChild(link6);
  textBox.appendChild(h1);
  textBox.appendChild(p1);
  textBox.appendChild(p2);

  hero.appendChild(textBox);

  return hero;
}
