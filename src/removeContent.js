export function removeContent() {
  const content = document.getElementById("content");
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
  return content;
}
