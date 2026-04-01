// index.js
import { greeting } from "./greet.js";
import "./style.css";
import odinImage from "./img/odin-lined.png";

const img = document.createElement("img");
img.src = odinImage;

document.body.appendChild(img);

console.log(greeting);
