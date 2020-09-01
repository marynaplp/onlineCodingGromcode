import { renderList } from "./render.js"
import { tasks } from "./storage.js"
import {
    createTask,
    updateTask
}
from "./gateway.js"
renderList(tasks);
const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', createTask);

const listElem = document.querySelector('.list');
listElem.addEventListener('click', updateTask);