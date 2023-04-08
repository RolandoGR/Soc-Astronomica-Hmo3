import { removeContent } from "./removeContent";
import { navigation } from "./navigation";
import { footer } from "./footer";
import REUNIONES from "./img/REUNIONES.jpg";
import OBSERVACIONES from "./img/OBSERVACIONES.jpg";
import INVESTIGACION from "./img/INVESTIGACION.jpg";
import EDUCACION from "./img/EDUCACION.jpg";

export function activities() {
  removeContent();
  const content = document.getElementById("content");
  // create header section
  const header = document.createElement("section");
  header.classList.add("header");

  const nav = navigation();
  header.appendChild(nav);
  content.appendChild(header);
  // create activities section
  const activities = document.createElement("section");
  activities.classList.add("activities");

  //create activities heading
  const activitiesHeading = document.createElement("h1");
  activitiesHeading.textContent = "Actividades";

  //create list of activities items
  const listaActividades = document.createElement("ol");

  // create itemReuniones
  const itemReuniones = document.createElement("li");
  itemReuniones.classList.add("itemReuniones");

  //create reunionesTitle
  const reunionesTitle = document.createElement("div");
  reunionesTitle.classList.add("circleTitle");
  reunionesTitle.classList.add("reunionesTitle");

  const pReunionesTitle = document.createElement("p");
  pReunionesTitle.textContent = "Reuniones y eventos";

  //create pReuniones
  const pReuniones = document.createElement("p");
  pReuniones.classList.add("pMainActividades");
  pReuniones.textContent =
    "La sociedad astronómica organiza regularmente reuniones y eventos donde los miembros pueden compartir sus conocimientos y aprender más sobre la astronomía. Estas reuniones son una oportunidad para conectarse con otros entusiastas de la astronomía y aprender de expertos en la materia.";

  //append all in itemReuniones
  reunionesTitle.appendChild(pReunionesTitle);
  itemReuniones.appendChild(pReuniones);
  itemReuniones.appendChild(reunionesTitle);
  listaActividades.appendChild(itemReuniones);

  //create itemObservaciones
  const itemObservaciones = document.createElement("li");
  itemObservaciones.classList.add("itemObservaciones");

  //create observacionesTitle
  const observacionesTitle = document.createElement("div");
  observacionesTitle.classList.add("circleTitle");
  observacionesTitle.classList.add("observacionesTitle");

  const pObservacionesTitle = document.createElement("p");
  pObservacionesTitle.textContent = "Observaciones";

  //create pObservaciones
  const pObservaciones = document.createElement("p");
  pObservaciones.classList.add("pMainActividades");
  pObservaciones.textContent =
    "Por lo menos una vez al mes se realizan observaciones astronómicas para que los miembros puedan ver los cuerpos celestes en acción. Estas observaciones pueden incluir el uso de telescopios y otros instrumentos para explorar el universo y descubrir nuevas maravillas.";

  //append all in itemObservaciones
  observacionesTitle.appendChild(pObservacionesTitle);
  itemObservaciones.appendChild(pObservaciones);
  itemObservaciones.appendChild(observacionesTitle);
  listaActividades.appendChild(itemObservaciones);

  //create itemInvestigaciones
  const itemInvestigaciones = document.createElement("li");
  itemInvestigaciones.classList.add("itemInvestigaciones");

  //create investigacionesTitle
  const investigacionesTitle = document.createElement("div");
  investigacionesTitle.classList.add("circleTitle");
  investigacionesTitle.classList.add("investigacionesTitle");

  const pInvestigacionesTitle = document.createElement("p");
  pInvestigacionesTitle.textContent = "Investigaciones";

  //create pInvestigaciones
  const pInvestigaciones = document.createElement("p");
  pInvestigaciones.classList.add("pMainActividades");
  pInvestigaciones.textContent =
    "También realizamos investigaciones astronómicas para que los miembros puedan estudiar los cuerpos celestes en acción. Estas investigaciones pueden incluir el uso de telescopios y otros instrumentos para explorar el universo y descubrir nuevas maravillas.";

  //append all in itemInvestigaciones
  investigacionesTitle.appendChild(pInvestigacionesTitle);
  itemInvestigaciones.appendChild(pInvestigaciones);
  itemInvestigaciones.appendChild(investigacionesTitle);
  listaActividades.appendChild(itemInvestigaciones);

  //create itemEducacion
  const itemEducacion = document.createElement("li");
  itemEducacion.classList.add("itemEducacion");

  //create educacionTitle
  const educacionTitle = document.createElement("div");
  educacionTitle.classList.add("circleTitle");
  educacionTitle.classList.add("educacionTitle");

  const pEducacionTitle = document.createElement("p");
  pEducacionTitle.textContent = "Educación";

  //create pEducacion
  const pEducacion = document.createElement("p");
  pEducacion.classList.add("pMainActividades");
  pEducacion.textContent =
    "La sociedad promueve actividades educativas para que los miembros puedan aprender más sobre el universo y la astronomía. Estas actividades pueden incluir talleres, charlas y eventos especiales para niños y adultos. Contáctanos para ir a tu comunidad.";

  //append all in itemEducacion
  educacionTitle.appendChild(pEducacionTitle);
  itemEducacion.appendChild(pEducacion);
  itemEducacion.appendChild(educacionTitle);
  listaActividades.appendChild(itemEducacion);

  activities.appendChild(activitiesHeading);
  activities.appendChild(listaActividades);

  content.appendChild(activities);

  // create footer section
  const footerSection = footer();
  content.appendChild(footerSection);
}
