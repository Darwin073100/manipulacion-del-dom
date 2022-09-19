//import './main.css';
import '@styles/main.css';

//const url = "http://localhost:8090/persona/all";
const url = process.env.API;
const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Vel provident voluptatum, sed, quae enim inventore ipsum non unde`;
const src = "assets/images/file-manager.svg";

// Web api
async function Persona() {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

Persona().then((data) => {
  const allItems = [];
  const container = document.createElement("div");
  container.className = "container";

  data.forEach((d) => {
    const image = document.createElement("img");
    image.src = src;
    const name = document.createElement("h2");
    name.textContent = d.nombre + " " + d.apellidos;
    const text = document.createElement("p");
    text.textContent = description;

    const item = document.createElement("div");
    item.className = "item";
    item.append(image, name, text);

    allItems.push(item);
  });
  container.append(...allItems);
  document.body.append(container);
});
