import { createProject, projectArray, deleteProject,createTodo } from "./todo";
import trashImage from "../images/trash-can.svg"

export function renderProjectHeader(project) {
    const projectContainer = document.querySelector(".project-container");
    const container = document.querySelector(".bottom");
    container.removeChild(projectContainer);
    const proj = document.createElement("div");    
    proj.classList.add("project-container");
    const projTitle = document.createElement("h2");
    projTitle.id = "projTitle"
    projTitle.textContent = project.title;
    proj.appendChild(projTitle);
    container.insertBefore(proj,container.firstChild);
}

export function handleAddTask() {
    const addTaskBtn = document.querySelector(".task-button")
    const dialog = document.getElementById("taskModal");
    const submitButton = document.querySelector("#submit-task");
    const cancelButton = document.getElementById("cancel-task");

    addTaskBtn.addEventListener("click", () => {
        dialog.showModal();
    })
    submitButton.addEventListener("click", () => {
        //Match project title with current array index to make sure tasks are added to correct project
        const activeIndex = findCurrentIndex();
        const taskTitle = document.getElementById("task-title").value;
        const titleDescription = document.getElementById("description").value
        const dueDate = document.getElementById("date").value
        const newTodo = createTodo(taskTitle,titleDescription,dueDate,"",projectArray[activeIndex]);
        renderTasks();
        dialog.close();
    })
    cancelButton.addEventListener("click", () => {
        dialog.close();
    })
};

export function renderProjectTitles (projectArray) {
    let index = 0;
    const container = document.querySelector(".side-bottom");
    const projList = document.querySelector(".projList");
    //Dynamically remove all elements
    while(projList.firstChild) {
        projList.removeChild(projList.firstChild);
    }
    projectArray.forEach(element => {
        const projItem = document.createElement('li');
        projItem.setAttribute("data-index",index)
        projItem.textContent = element.title;
        insertTrashImg(projItem);
        projectListener(projItem);
        projList.appendChild(projItem);
        index++;
        
    });
    container.appendChild(projList);

};

function insertTrashImg(parent) {
    const trshImg = document.createElement("img");
    trshImg.src = trashImage;
    const dataIndex = parent.dataset.index
    //Enable deleting of a project 
    trshImg.addEventListener("click", () => handleDeleteProject(dataIndex));
    parent.appendChild(trshImg)
}

export function handleAddProject (projectArray) {
    const dialog = document.getElementById("projectModal")
    const showButton = document.querySelector(".add-project");
    const submitButton = document.querySelector("#submitBtn");
    const cancelButton = document.getElementById("cancelBtn");


    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    submitButton.addEventListener("click", () => {
        const project = createProject(document.getElementById("title").value);
        renderProjectHeader(project);
        renderProjectTitles(projectArray);
        dialog.close();
    })

    cancelButton.addEventListener("click", () => {
        dialog.close();
    })
};

function handleDeleteProject (projectIndex) {
    const index = projectIndex;
    //Don't let last project get deleted
    if (projectArray.length > 1) {
        deleteProject(projectArray[index]);
        renderProjectTitles(projectArray);
    }
}

function projectListener(projItem) {
    const index = projItem.dataset.index;
    projItem.addEventListener("click", () => switchActiveProject(index));

}
function switchActiveProject(index) {
    //
    if (index > projectArray.length-1) {
        index--;
    }
    if(index >= 0) renderProjectHeader(projectArray[index]);
    renderTasks()
}

function findCurrentIndex () {
    const projTitle = document.getElementById("projTitle").textContent
    const activeIndex = projectArray.findIndex((element) => element.title === projTitle)
    return activeIndex;
}

//FIX
function renderTasks() {
    let index = 0;
    const projContainer = document.querySelector(".project-container")
    //Need this check so doesn't duplicate multiple tasks
    if(document.getElementById("task-container")){
        projContainer.removeChild(document.getElementById("task-container"))
    }
    const container = document.createElement("div")
    container.id = "task-container" 
    
    projectArray[findCurrentIndex()].project.forEach(element => {
        const taskList = document.createElement("div");
        taskList.setAttribute("data-index",index);
        taskList.textContent = element.title;
        taskList.classList.add("task-div")
        //FIX Description Rendering
        taskList.addEventListener("click", () => {
           const cardDisplay = document.createElement("div")
        })
        container.appendChild(taskList);
        index++;
    })
    
    projContainer.appendChild(container);
}



