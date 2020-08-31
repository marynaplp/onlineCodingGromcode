const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
export const checkthisDone = (event) => {
    const checkedEl = event.target;
    if (checkedEl.tagName !== 'INPUT') return;
    const getElId = tasks.find(elem => elem.id === +checkedEl.parentElement.dataset.id);
    getElId.done = checkedEl.checked;
    getElId.doneDate = new Date();
    listElem.innerHTML = '';
    renderList(tasks);
};
listElem.addEventListener('click', checkthisDone);
export const createTaskBoard = () => {
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