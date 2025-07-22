const projectSelection = ["Personal", "Work", "Education", "Others"];
const statusSelection = ["Low", "Medium", "High"];

class Tasks {
    constructor(title, project, due, status, note, desc) {
        this.title = title;
        this.project = project;
        this.due = due;
        this.status = status;
        this.note = note;
        this.desc = desc;
        this.id = title + Math.floor(Math.random() * 100);
    }
}

export function createAdd() {
    console.log("add button working")

    const addContainer = document.createElement("div");
    addContainer.id = "addContainer";

    const leftContainer = document.createElement("div");
    leftContainer.id = "leftContainer";
    
    const rightContainer = document.createElement("div");
    rightContainer.id = "rightContainer";

    const titleDiv = document.createElement("div");
    titleDiv.id = "titleDiv";

    const projectDiv = document.createElement("div");
    projectDiv.id = "projectDiv";

    const dueDiv = document.createElement("div");
    dueDiv.id = "dueDiv";

    const statusDiv = document.createElement("div");
    statusDiv.id = "statusDiv";

    const noteDiv = document.createElement("div");
    noteDiv.id = "noteDiv";

    const descDiv = document.createElement("div");
    descDiv.id = "descDiv";

    const titleText = document.createElement("h3");
    titleText.id = "titleText";
    titleText.innerHTML = "Title:";

    const projectText = document.createElement("h3");
    projectText.id = "projectText";
    projectText.innerHTML = "Project:";

    const dueText = document.createElement("h3");
    dueText.id = "dueText";
    dueText.innerHTML = "Due Date:";

    const statusText = document.createElement("h3");
    statusText.id = "statusText";
    statusText.innerHTML = "Status:";

    const noteText = document.createElement("h3");
    noteText.id = "noteText";
    noteText.innerHTML = "Additional Notes:";

    const descText = document.createElement("h3");
    descText.id = "descText";
    descText.innerHTML = "Description:";

    const titleInp = document.createElement("input");
    titleInp.type = "text";
    titleInp.id = "titleInp";

    const projectInp = document.createElement("select");
    projectInp.id = "projectInp";

    projectSelection.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        projectInp.appendChild(option);
    })

    const dueInp = document.createElement("input");
    dueInp.type = "date";
    dueInp.id = "dueInp";

    const statusInp = document.createElement("select");
    statusInp.id = "statusInp";

    statusSelection.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        statusInp.appendChild(option);
    })

    const noteInp = document.createElement("input");
    noteInp.type = "text";
    noteInp.id = "noteInp";

    const descInp = document.createElement("input");
    descInp.type = "text";
    descInp.id = "descInp";

    titleDiv.appendChild(titleText);
    titleDiv.appendChild(titleInp);
    leftContainer.appendChild(titleDiv);

    projectDiv.appendChild(projectText);
    projectDiv.appendChild(projectInp);
    leftContainer.appendChild(projectDiv);

    dueDiv.appendChild(dueText);
    dueDiv.appendChild(dueInp);
    leftContainer.appendChild(dueDiv);

    statusDiv.appendChild(statusText);
    statusDiv.appendChild(statusInp);
    leftContainer.appendChild(statusDiv);

    noteDiv.appendChild(noteText);
    noteDiv.appendChild(noteInp);
    leftContainer.appendChild(noteDiv);
    
    descDiv.appendChild(descText);
    descDiv.appendChild(descInp);
    rightContainer.appendChild(descDiv);

    const submit = document.createElement("button");
    submit.id = "submit";
    submit.type = "button";
    submit.innerHTML = "Submit!";

    rightContainer.appendChild(submit);

    submit.addEventListener('click', function(e) {
    e.preventDefault();

    const title = titleInp.value.trim();
    const project = projectInp.value.trim();
    const due = dueInp.value.trim();
    const status = statusInp.value.trim();
    const note = noteInp.value.trim();
    const desc = descInp.value.trim();

    if (title && project && due && status && note && desc) {
        const newTask = new Tasks(title, project, due, status, note, desc);
        
        let stored = localStorage.getItem('tasks');
        let taskArray = stored ? JSON.parse(stored) : [];

        taskArray.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(taskArray));

        console.log("Task Saved:", newTask)
    } else {
        alert("Fill out all the details ples.")
    }
    })


    addContainer.appendChild(leftContainer);
    addContainer.appendChild(rightContainer);
    

    return addContainer;
};
