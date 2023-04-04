export function aboutUs() {
  const aboutUs = document.createElement("section");
  aboutUs.classList.add("aboutUs");
  const aboutUsHeading = document.createElement("h1");
  aboutUsHeading.textContent = "Sobre nosotros";
  const aboutUsParagraph = document.createElement("p");
  aboutUsParagraph.textContent =
    "Fundada en 2022, la SAH tiene como objetivo divulgar la astronomía de manera incluyente. Somos una empresa sin fines de lucro y con responsabilidad social, cuyo único fin es la enseñanza de la ciencia a cualquier persona interesada sin importar nivel socio económico, cultural, profesional o cualquier otro.";
  aboutUs.appendChild(aboutUsHeading);
  aboutUs.appendChild(aboutUsParagraph);
  const aboutUsRow = document.createElement("div");
  aboutUsRow.classList.add("row");

  const marcoLegalCol = document.createElement("div");
  marcoLegalCol.classList.add("aboutUS-col");

  const marcoLegalHeading = document.createElement("h3");
  marcoLegalHeading.textContent = "Marco Legal";

  const marcoLegalParagraph = document.createElement("p");
  marcoLegalParagraph.textContent =
    "La Sociedad Astronómica de Hermosillo, A.C. es una asociación sin fines de lucro.";

  const misionCol = document.createElement("div");
  misionCol.classList.add("aboutUS-col");

  const misionHeading = document.createElement("h3");
  misionHeading.textContent = "Misión";

  const misionParagraph = document.createElement("p");
  misionParagraph.textContent =
    "Dar a conocer la astronomía y la ciencia al mayor número de personas para lograr hacer de ésta una herramienta de pensamiento crítico e innovador.";

  const comunidadCol = document.createElement("div");
  comunidadCol.classList.add("aboutUS-col");

  const comunidadHeading = document.createElement("h3");
  comunidadHeading.textContent = "Comunidad";

  const comunidadParagraph = document.createElement("p");
  comunidadParagraph.textContent =
    "Ya sea de forma virtual o presencial, nos reunimos al menos una vez al mes para compartir nuestro gusto por explorar los cielos.";

  marcoLegalCol.appendChild(marcoLegalHeading);
  marcoLegalCol.appendChild(marcoLegalParagraph);

  misionCol.appendChild(misionHeading);
  misionCol.appendChild(misionParagraph);

  comunidadCol.appendChild(comunidadHeading);
  comunidadCol.appendChild(comunidadParagraph);

  aboutUsRow.appendChild(marcoLegalCol);
  aboutUsRow.appendChild(misionCol);
  aboutUsRow.appendChild(comunidadCol);

  aboutUs.appendChild(aboutUsHeading);
  aboutUs.appendChild(aboutUsParagraph);
  aboutUs.appendChild(aboutUsRow);

  return aboutUs;
}
