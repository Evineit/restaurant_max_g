export default function navbar(){
    const nav = document.createElement("nav")
    const ul = document.createElement("ul")
    const home = createListItem("home")
    const menu = createListItem("menu")
    const contact = createListItem("contact")
    const img = document.createElement("img")

    img.alt = "logo"
    ul.append(home,menu,contact)
    nav.append(img, ul)
    return nav
}

function createListItem(text) {
    const li = document.createElement("li")
    li.textContent = text
    return li
}