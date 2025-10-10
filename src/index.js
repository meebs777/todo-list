import "./styles.css";
import { createProject, createTodo, projectArray, projectIndex,deleteProject,deleteTodo,editTodo } from "./todo.js"
import { renderProject, renderProjectHeader, renderProjectTitles, handleAddProject } from "./dom.js";


const project = createProject("First Project");
const project1 = createProject("Second Project");
const todo = createTodo("Title","Description","DueDate","Priority",project);
const todo1 = createTodo("Title-1","Description","DueDate","Priority",project);
const todo2 = createTodo("Title-1","Description","DueDate","Priority",project);
renderProjectHeader(project);
renderProjectHeader(project1)
renderProjectTitles(projectArray)
const project2 = createProject("Second Project");
renderProjectTitles(projectArray)
handleAddProject(projectArray);


