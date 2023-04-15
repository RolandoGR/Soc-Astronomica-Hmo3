import { removeContent } from "./removeContent";
import { navigation } from "./navigation";
import { aboutUs } from "./aboutUs";
import { keyApod } from "./keyApod";
import { footer } from "./footer";
import { isToday, startOfDay, startOfToday, format, sub } from "date-fns";
import notavailable from "./img/notavailable.png";

export function imageOfTheDay() {
  // Manage dates
  const formattedEndDate = format(startOfToday(), "yyyy-MM-dd");
  const startDate = sub(new Date(formattedEndDate), {
    days: 28,
  });
  const formattedStartDate = format(startDate, "yyyy-MM-dd");

  // Create APOD Url
  const newApodUrl = `https://api.nasa.gov/planetary/apod?api_key=${keyApod}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`;

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
  content.appendChild(imageOfTheDay);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("imageDiv");

  const apodImg = document.createElement("img");
  apodImg.classList.add("apodImg");

  imageDiv.appendChild(sideArrow("left"));
  imageDiv.appendChild(apodImg);
  imageDiv.appendChild(sideArrow("right"));

  let apodTitle = document.createElement("h3");
  apodTitle.classList.add("apodTitle");

  let apodExpl = document.createElement("div");
  apodExpl.classList.add("apodExpl");

  displayApod();
  imageOfTheDay.appendChild(apodTitle);
  imageOfTheDay.appendChild(imageDiv);
  imageOfTheDay.appendChild(apodExpl);

  // Create Gallery div
  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

  const galleryTitle = document.createElement("h2");
  galleryTitle.textContent = "Galería del mes";
  galleryTitle.classList.add("galleryTitle");

  imageOfTheDay.style.backgroundColor = "black";
  imageOfTheDay.appendChild(galleryTitle);
  imageOfTheDay.appendChild(gallery);
  content.appendChild(imageOfTheDay);

  // create footer section
  const footerSection = footer();
  content.appendChild(footerSection);

  //functions
  function responseIntoContent(apodData) {
    apodImg.src = apodData.hdurl;
    apodImg.setAttribute("id", `img-29`);
    apodExpl.textContent = apodData.explanation;
    apodTitle.textContent = apodData.title;
  }

  function sideArrow(side, edit) {
    let arrow;
    //console.log(apodData);
    if (edit) {
      arrow = document.getElementById(`arrow-${side}`);
    } else {
      arrow = document.createElement("span");
      arrow.classList.add("material-symbols-rounded");
      arrow.setAttribute("id", `arrow-${side}`);
      arrow.textContent = `chevron_${side}`;
    }
    arrow.addEventListener("click", async (event) => {
      let apodData = await getApodData();
      const imgId = document.querySelector(".apodImg");
      let index = imgId.id.substring(4);
      let previousImg = index - 1;
      let nextImg = parseInt(index) + 1;

      event.preventDefault();
      console.log();
      if (side === "left") {
        reloadImg(event, apodData, nextImg);
      } else {
        reloadImg(event, apodData, previousImg);
      }
    });
    return arrow;
  }

  function reloadImg(event, apodData, i) {
    let apodTitle = document.getElementsByClassName("apodTitle");
    let apodImg = document.getElementsByClassName("apodImg");
    let apodExpl = document.getElementsByClassName("apodExpl");

    console.log("reload");
    event.preventDefault();
    apodTitle[0].textContent = `${format(
      new Date(apodData[i].date),
      "dd-MMM-y"
    )}: ${apodData[i].title}`;
    apodImg[0].src = apodData[i].url;
    apodImg[0].setAttribute("id", `img-${i}`);
    apodExpl[0].textContent = apodData[i].explanation;
    const imageOfTheDayOffset = imageOfTheDay.offsetTop;
    window.scrollTo({ top: imageOfTheDayOffset, behavior: "smooth" });
  }

  async function getApodData() {
    const response = await fetch(newApodUrl, { mode: "cors" });
    const apodData = await response.json();
    return apodData;
  }

  async function displayApod() {
    let apodData = await getApodData();

    responseIntoContent(apodData[29]);

    for (let i = apodData.length - 1; i >= 0; i--) {
      const img = document.createElement("img");
      img.alt = apodData[i].title;
      img.src = apodData[i].url;
      img.classList.add("thumbnail");
      img.setAttribute("id", `thumbnail${i}`);

      // add error event listener to each image element
      img.addEventListener("error", function () {
        this.src = notavailable;
        this.alt = "Image not available";
      });
      // thumnbail event listener to reload image displayed
      img.addEventListener("click", (event) => {
        reloadImg(event, apodData, i);
      });
      gallery.appendChild(img);
    }
  }
}
