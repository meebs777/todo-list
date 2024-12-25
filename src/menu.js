import menuImg from "./menu.jpg"

export function menu() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const title = document.createElement("h1");
    title.classList.add("menu-title");
    title.textContent = "Have a look at our menu below";

    const image = document.createElement("img");
    image.classList.add("menu-img");
    image.src = menuImg;

    container.appendChild(title);
    container.appendChild(image);

    content.appendChild(container);




}