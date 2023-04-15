import { removeContent } from "./removeContent";
import { navigation } from "./navigation";
import { aboutUs } from "./aboutUs";
import { keyApod } from "./keyApod";
import { footer } from "./footer";
import { isToday, startOfDay, startOfToday, format, sub } from "date-fns";
import notavailable from "./img/notavailable.png";

export function newsSection() {
  removeContent();
  const content = document.getElementById("content");
  // create header section
  const header = document.createElement("section");
  header.classList.add("header");

  const nav = navigation();
  header.appendChild(nav);
  content.appendChild(header);

  // create news section
  const newsSection = document.createElement("newsSection");
  newsSection.classList.add("newsSection");

  //create news heading
  const newsHeading = document.createElement("h1");
  newsHeading.textContent = "Noticias";

  const newsText = document.createElement("div");
  newsText.textContent = "En construcción :)";

  content.appendChild(newsHeading);
  content.appendChild(newsText);
}
