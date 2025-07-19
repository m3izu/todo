const projectSelection = ["Personal", "Work", "Education", "Others"];
const statusSelection = ["Low", "Medium", "High"];

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

    addContainer.appendChild(leftContainer);
    addContainer.appendChild(rightContainer);
    
    return addContainer;
};