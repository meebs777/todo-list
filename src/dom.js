
export function renderProject(project) {
    const projectContainer = document.querySelector(".project-container");
    const container = document.querySelector(".bottom");
    container.removeChild(projectContainer);
    const proj = document.createElement("div");    
    proj.classList.add("project-container");
    const projTitle = document.createElement("h3");
    projTitle.textContent = project.title;
    proj.appendChild(projTitle);
    container.appendChild(proj);

}

export function addTodo() {

}