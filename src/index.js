import "./styles.css";
import { createProject,projectArray } from "./todo.js"
import { renderProjectHeader, renderProjectTitles, handleAddProject, handleAddTask, renderTasks } from "./dom.js";
import { retrieveProject } from "./localstorage.js";
export { projectArray }



retrieveProject();
localStorage.clear();
if(projectArray.length === 0) {
    createProject("Task A")
}
renderProjectHeader(projectArray[0]);
renderProjectTitles(projectArray)
handleAddProject(projectArray);
handleAddTask();
renderProjectTitles(projectArray)
renderTasks()

