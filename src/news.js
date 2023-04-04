import { removeContent } from "./removeContent";
import { navigation } from "./navigation";
import { aboutUs } from "./aboutUs";

export function newsSection() {
  removeContent();
  const content = document.getElementById("content");
  // create header section
  const header = document.createElement("section");
  header.classList.add("header");

  const nav = navigation();
  header.appendChild(nav);
  content.appendChild(header);

  const news = document.createElement("section");
  news.classList.add("news");
  const newsHeading = document.createElement("h1");
  newsHeading.textContent = "Noticias";
  news.appendChild(newsHeading);
  content.appendChild(news);
}
