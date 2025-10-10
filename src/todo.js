export const projectArray = [];

class Todo {
    constructor(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    
}

class Project {
    constructor(title) {
        this.title = title;
        this.project = [];
    }

    newTodo (todo) {
        this.project.push(todo);
    }

    deleteTodo(todo) {
        const title = todo.title;
        const index = this.project.findIndex((todo) => todo.title === title);
        this.project.splice(index,1);
    }

}

export function createProject(title) {
    const project = new Project(title);
    projectArray.push(project);
    return project;
}

export function deleteProject(project) {
    const projTitle = project.title;
    const index = projectArray.findIndex((project) => project.title === projTitle );
    projectArray.splice(index,1);
}



export function createTodo(title,description,dueDate,priority,project){
    const todo = new Todo(title,description,dueDate,priority);
    project.newTodo(todo);
    return todo;
}

export function deleteTodo(project,todo) {
    project.deleteTodo(todo);
}

export function editTodo(todo,key,value) {
    todo[key] = value;
}