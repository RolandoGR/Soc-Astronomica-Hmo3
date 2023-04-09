import { removeContent } from "./removeContent";
import { navigation } from "./navigation";
import { aboutUs } from "./aboutUs";
import { keyApod } from "./keyApod";
import { footer } from "./footer";

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

  const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${keyApod}`;
  const apodImg = document.createElement("img");
  apodImg.classList.add("apodImg");

  const apodTitle = document.createElement("h3");
  apodTitle.classList.add("apodTitle");

  const apodExpl = document.createElement("div");
  apodExpl.classList.add("apodExpl");

  //getApod();

  newGetApod();

  news.appendChild(apodTitle);
  news.appendChild(apodImg);
  news.appendChild(apodExpl);
  news.style.backgroundColor = "black";
  content.appendChild(news);

  // create footer section
  const footerSection = footer();
  content.appendChild(footerSection);

  function getApod() {
    console.log(keyApod);
    fetch(apodUrl, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        responseIntoContent(response);
      });
  }

  async function newGetApod() {
    const response = await fetch(apodUrl, { mode: "cors" });
    const apodData = await response.json();
    console.log(apodData);
    apodImg.src = apodData.hdurl;
    apodExpl.textContent = apodData.explanation;
    apodTitle.textContent = apodData.title;
  }

  function responseIntoContent(response) {
    apodImg.src = response.hdurl;
    apodExpl.textContent = response.explanation;
    apodTitle.textContent = response.title;
  }
}
