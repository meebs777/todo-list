import restaurantImg from "./restaurant.jpg"

export function home() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("container");

  const title =  document.createElement('h1');
  title.classList.add("home-title");

  const text = document.createElement("div");
  text.classList.add("home-intro");

  const image = document.createElement("img");
  image.src = restaurantImg;

  title.textContent = "Welcome to Shawarma Palace!"
  text.textContent = "Ain't nobody in this city beating us when it comes to Shawarma!"
  
  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(image);
  content.appendChild(container);
  
}

