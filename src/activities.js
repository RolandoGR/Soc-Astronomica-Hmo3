import { removeContent } from "./removeContent";
import { navigation } from "./navigation";

export function activities() {
  removeContent();
  const content = document.getElementById("content");
  // create header section
  const header = document.createElement("section");
  header.classList.add("header");

  const nav = navigation();
  header.appendChild(nav);
  content.appendChild(header);

  const activities = document.createElement("section");
  activities.classList.add("activities");
  const activitiesHeading = document.createElement("h1");
  activitiesHeading.textContent = "Actividades";
  activities.appendChild(activitiesHeading);
  content.appendChild(activities);
}
