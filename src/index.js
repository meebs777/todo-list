import "./styles.css";
import { createProject, createTodo, projectArray, projectIndex,deleteProject,deleteTodo,editTodo } from "./todo.js"
import { renderProject } from "./dom.js";


const project = createProject("First Project");
const project1 = createProject("Second Project");
const todo = createTodo("Title","Description","DueDate","Priority",project);
const todo1 = createTodo("Title-1","Description","DueDate","Priority",project);
const todo2 = createTodo("Title-1","Description","DueDate","Priority",project);
renderProject(project);


