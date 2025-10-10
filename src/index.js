import "./styles.css";
import { createProject, createTodo, projectArray, projectIndex,deleteProject,deleteTodo,editTodo } from "./todo.js"
import { renderProject, renderProjectHeader, renderProjectTitles, handleAddProject, handleAddTask } from "./dom.js";


const project = createProject("A");
const project1 = createProject("B");
const todo = createTodo("Title","Description","DueDate","Priority",project);
const todo1 = createTodo("Title-1","Description","DueDate","Priority",project);
const todo2 = createTodo("Title-1","Description","DueDate","Priority",project);
renderProjectHeader(project);
renderProjectHeader(project1)
renderProjectTitles(projectArray)
const project2 = createProject("C");
renderProjectTitles(projectArray)
handleAddProject(projectArray);
handleAddTask()

