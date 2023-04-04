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
}
