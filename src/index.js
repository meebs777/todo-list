import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";
import "./styles.css";

const content = document.querySelector("#content");
const menuButton = document.querySelector("#menu");
const homeButton = document.querySelector("#home");
const aboutButton = document.querySelector("#about")

function homeRender() {
    const container = document.querySelector(".container");
    content.removeChild(container);
    home();
}

function menuRender() {
    const container = document.querySelector(".container");
    content.removeChild(container);
    menu();

}

function aboutRender() {
    const container = document.querySelector(".container");
    content.removeChild(container);
    about();
}

homeButton.addEventListener("click",homeRender);
menuButton.addEventListener("click",menuRender);
aboutButton.addEventListener("click",aboutRender);

home();