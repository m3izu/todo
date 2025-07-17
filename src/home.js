export function createHome(){
    const container = document.createElement('div');
    container.id = "container";    
    
    const snack = document.createElement('div');
    snack.id = "snack";

    const title = document.createElement('h1');
    title.id = "title";
    title.innerHTML = "Franki's <span class='tHigh'>ToDo</span> WebApp";
    snack.appendChild(title);

    const smallP = document.createElement('p');
    smallP.id = "smallP";
    smallP.textContent = "A simple todo list web application bundled using webpack"

    container.appendChild(snack);
    container.appendChild(smallP);

    
    return container;
}