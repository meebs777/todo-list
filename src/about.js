export function about() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const title = document.createElement("h1");
    title.classList.add("about-title");
    title.textContent = "About Us"
    

    const text = document.createElement("div");
    text.classList.add("about-text")
    text.textContent = "We have been in the game for a while now and we are undefeatable. Don't believe us? Come down to ------- and find out what everyone's raving about for yourself. Or you can hit our line at --------"

    container.appendChild(title);
    container.appendChild(text);
    content.appendChild(container);
}