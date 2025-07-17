import "./styles.css"
import { createHome } from './home.js'

const content = document.getElementById("content");
content.innerHTML = "";
const { snack, smallP } = createHome();
content.appendChild(snack);
content.appendChild(smallP);