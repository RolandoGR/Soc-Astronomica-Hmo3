import { removeContent } from "./removeContent";
import { navigation } from "./navigation";
import { keyApod } from "./keyApod";
import { footer } from "./footer";

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

  const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${keyApod}`;
  const apodImg = document.createElement("img");
  apodImg.classList.add("apodImg");

  const apodTitle = document.createElement("h3");
  apodTitle.classList.add("apodTitle");

  const apodExpl = document.createElement("div");
  apodExpl.classList.add("apodExpl");

  getApod();

  imageOfTheDay.appendChild(apodTitle);
  imageOfTheDay.appendChild(apodImg);
  imageOfTheDay.appendChild(apodExpl);
  content.appendChild(imageOfTheDay);

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

  function responseIntoContent(response) {
    apodImg.src = response.hdurl;
    apodExpl.textContent = response.explanation;
    apodTitle.textContent = response.title;
  }
}
