import { projectArray } from "./index";

export function storeProject(projectIndex,project) {
    localStorage.setItem(`project-${projectIndex}`,JSON.stringify(project))
}


export function retrieveProject() {
    let n = 0
    while(localStorage.getItem(`project-${n}`)) {
        let j = 0;
        const project = JSON.parse(localStorage.getItem(`project-${n}`)) 
        console.log(project)
        project.newTodo = function(todo) {
            this.project.push(todo);
        };
        project.deleteTodo = function(todo) {
            const title = todo.title;
            const index = this.project.findIndex((todo) => todo.title === title);
            this.project.splice(index,1);
        }
        projectArray[n] = project;
        n++;
    }
}