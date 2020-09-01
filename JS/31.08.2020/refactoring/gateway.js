import { tasks } from "./storage.js"
import { renderList } from "./render.js"

const inputElem = document.querySelector('.task-input');

export const updateTask = (event) => {
    const checkedEl = event.target;
    if (checkedEl.tagName !== 'INPUT') return;

    const taskById = tasks.find(elem => elem.id == checkedEl.dataset.id);

    taskById.done = !taskById.done;
    taskById.doneDate = taskById.done ? new Date() : null;

    renderList(tasks);
};
//listElem.addEventListener('click', checkthisDone);

export const createTask = () => {
    if (inputElem.value == '') return;
    tasks.push({
        id: tasks.length + 1,
        text: inputElem.value,
        done: false,
        createDate: new Date(),
        doneDate: null,
    });
    inputElem.value = '';
    listElem.innerHTML = '';
    renderList(tasks);
};