export function footer() {
  const footer = document.createElement("footer");
  const link = document.createElement("a");
  link.href = "https://github.com/RolandoGR";

  const createdBy = document.createTextNode("Created by RolandoGR ");
  footer.appendChild(createdBy);

  const icon = document.createElement("img");
  icon.classList.add("githubIcon");
  icon.src = "https://github.com/fluidicon.png";
  link.appendChild(icon);
  footer.appendChild(link);
  return footer;
}
