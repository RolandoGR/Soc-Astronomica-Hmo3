import { removeContent } from "./removeContent";
import { navigation } from "./navigation";

export function imageOfTheDay() {
  removeContent();
  const content = document.getElementById("content");
  // create header section
  const header = document.createElement("section");
  header.classList.add("header");

  const nav = navigation();
  header.appendChild(nav);
  content.appendChild(header);

  const imageOfTheDay = document.createElement("section");
  imageOfTheDay.classList.add("imageOfTheDay");
  const imageOfTheDayHeading = document.createElement("h1");
  imageOfTheDayHeading.textContent = "Imagen del día";
  imageOfTheDay.appendChild(imageOfTheDayHeading);
  content.appendChild(imageOfTheDay);
}