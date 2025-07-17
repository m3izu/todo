import "./styles.css"
import { createHome } from './home.js'
import { createAdd } from './add.js'
import { createList } from './list.js'


const content = document.getElementById("content");
content.innerHTML = "";
content.appendChild(createHome());

function navButton(choice) {
    content.innerHTML = "";
    return content.appendChild(choice);
}

document.getElementById("home").addEventListener("click", () => navButton(createHome()))
document.getElementById("add").addEventListener("click", () => navButton(createAdd()))
document.getElementById("list").addEventListener("click", () => navButton(createList()))