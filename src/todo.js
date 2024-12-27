const ARRAY_OFFSET = -1;
export const projectArray = [];
export let projectIndex = ARRAY_OFFSET;


class Todo {
    constructor(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todoIndex;
    }
    
}

class Project {
    constructor(title,projectIndex) {
        this.title = title;
        this.project = [];
        this.todoIndex = ARRAY_OFFSET;
        this.projectIndex = projectIndex;
    }

    newTodo (todo) {
        this.project.push(todo);
        this.todoIndex++;
    }

    deleteTodo(todo) {
        this.project.splice(todo.todoIndex,1);
        this.todoIndex--;
    }

}

export function createProject(title) {
    projectIndex++;
    const project = new Project(title,projectIndex);
    projectArray.push(project);
    return project;
}

export function deleteProject(project) {
    projectArray.splice(project.projectIndex,1);
    projectArray.forEach((proj) => {
        proj.projectIndex--;
    })
    projectIndex--;
}



export function createTodo(title,description,dueDate,priority,project){
    const todo = new Todo(title,description,dueDate,priority);
    project.newTodo(todo);
    todo.todoIndex = project.todoIndex;
    return todo;
}

export function deleteTodo(project,todo) {
    project.deleteTodo(todo);
    project.project.forEach((todo) => {
        todo.todoIndex--;
    }) 
}