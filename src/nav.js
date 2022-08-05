import "./style.css";
import Logo from "./logo.png";

export default function navbar() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const home = createListItem("home", true);
  const menu = createListItem("menu");
  const contact = createListItem("contact");
  const img = document.createElement("img");

  img.src = Logo;
  img.alt = "logo";

  ul.append(home, menu, contact);
  nav.append(img, ul);
  return nav;
}

function createListItem(text, isSelected = false) {
  const li = document.createElement("li");
  if (isSelected) {
    li.classList.add("selected");
  }
  li.textContent = text;
  return li;
}
