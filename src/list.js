import editt from "./images/edit.svg";
import deletee from "./images/delete.svg";

export function createList() {
    console.log("list working");
    
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const listContainer = document.createElement("div");
    listContainer.id = "listcont";

    tasks.forEach(task => {
        const taskCont = document.createElement("div");
        taskCont.id = task.id;
        taskCont.className = "taskCont";

        switch(task.status) {
            case "High":
                taskCont.style.backgroundColor = "#BC3333";
                break;
            case "Medium":
                taskCont.style.backgroundColor = "#96AA3D";
                break;
            case "Low":
                taskCont.style.backgroundColor = "#3DAA67";
                break;
            default:
                taskCont.style.backgroundColor = "#107CE0";
        };

        const lcont = document.createElement("div");
        lcont.id = `${task.id}-lcont`;
        lcont.className = "lcont";

        const title = document.createElement("h4");
        title.className = "titleList";
        title.innerHTML = task.title;

        const project = document.createElement("h5");
        project.className = "projectList";
        project.innerHTML = task.project;

        const mcont = document.createElement("div");
        mcont.id = `${task.id}-mcont`;
        mcont.className = `mcont`;

        const desc = document.createElement("p");
        desc.className = "descList";
        desc.innerHTML = task.desc;

        const ncont = document.createElement("div");
        ncont.id = `${task.id}-ncont`;
        ncont.className = "ncont";

        const notes = document.createElement("p");
        notes.className = "notesList";
        notes.innerHTML = task.note;

        const inNcont = document.createElement("div");
        inNcont.className = "innercont";

        const edit = document.createElement("img");
        edit.src = editt;
        edit.id = "editsvg";

        const delet = document.createElement("img");
        delet.src = deletee;
        delet.id = "deletesvg";

        inNcont.appendChild(edit);
        inNcont.appendChild(delet);
        mcont.appendChild(desc);
        ncont.appendChild(notes);
        ncont.appendChild(inNcont);
        lcont.appendChild(title);
        lcont.appendChild(project);
        taskCont.appendChild(lcont);
        taskCont.appendChild(mcont);
        taskCont.appendChild(ncont);
        
        listContainer.appendChild(taskCont);
    });

    return listContainer;
};
