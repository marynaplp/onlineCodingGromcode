import { renderList } from "./render.js"
import { tasks } from "./storage.js"
import {
    createTaskBoard,
    checkthisDone
}
from "./gateway.js"
renderList(tasks);
//const listElem = document.querySelector('.list');
createBtn.addEventListener('click', createTaskBoard);