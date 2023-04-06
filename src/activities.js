import { removeContent } from "./removeContent";
import { navigation } from "./navigation";
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

  const activities = document.createElement("section");
  activities.classList.add("activities");
  const activitiesHeading = document.createElement("h1");
  activitiesHeading.textContent = "Actividades";

  const listaActividades = document.createElement("ol");

  const itemReuniones = document.createElement("li");
  itemReuniones.textContent =
    "Reuniones y eventos: La sociedad astronómica organiza regularmente reuniones y eventos donde los miembros pueden compartir sus conocimientos y aprender más sobre la astronomía. Estas reuniones son una oportunidad para conectarse con otros entusiastas de la astronomía y aprender de expertos en la materia.";
  const imagenReuniones = document.createElement("img");
  imagenReuniones.src = REUNIONES;
  imagenReuniones.alt = "Reuniones y eventos";
  itemReuniones.appendChild(imagenReuniones);
  listaActividades.appendChild(itemReuniones);

  const itemObservaciones = document.createElement("li");
  itemObservaciones.textContent =
    "Observaciones astronómicas: La sociedad astronómica organiza observaciones astronómicas para que los miembros puedan ver los cuerpos celestes en acción. Estas observaciones pueden incluir el uso de telescopios y otros instrumentos para explorar el universo y descubrir nuevas maravillas.";
  const imagenObservaciones = document.createElement("img");
  imagenObservaciones.src = OBSERVACIONES;
  imagenObservaciones.alt = "Reuniones y eventos";
  itemObservaciones.appendChild(imagenObservaciones);
  listaActividades.appendChild(itemObservaciones);
  listaActividades.appendChild(itemObservaciones);

  const itemInvestigacion = document.createElement("li");
  itemInvestigacion.textContent =
    "Investigación: Los miembros de la sociedad astronómica también pueden participar en proyectos de investigación y colaborar con otros astrónomos en la comunidad científica. Esto les permite contribuir a la comprensión del universo y ser parte de una comunidad científica global.";
  const imagenInvestigacion = document.createElement("img");
  imagenInvestigacion.src = INVESTIGACION;
  imagenInvestigacion.alt = "Reuniones y eventos";
  itemInvestigacion.appendChild(imagenInvestigacion);
  listaActividades.appendChild(itemInvestigacion);
  listaActividades.appendChild(itemInvestigacion);

  const itemEducacion = document.createElement("li");
  itemEducacion.textContent =
    "Educación y divulgación científica: La sociedad astronómica de Hermosillo también se enfoca en la educación y divulgación científica, organizando talleres y charlas para estudiantes y la comunidad en general. Esto ayuda a crear conciencia y fomentar el interés en la ciencia y la astronomía en particular.";
  const imagenEducacion = document.createElement("img");
  imagenEducacion.src = EDUCACION;
  imagenEducacion.alt = "Reuniones y eventos";
  itemEducacion.appendChild(imagenEducacion);
  listaActividades.appendChild(itemEducacion);

  listaActividades.appendChild(itemEducacion);

  activities.appendChild(activitiesHeading);
  activities.appendChild(listaActividades);

  content.appendChild(activities);
}
