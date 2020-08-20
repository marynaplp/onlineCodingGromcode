const listElem = document.querySelector('.list');
const tasks = [{
        text: 'Buy milk',
        done: false
    },
    {
        text: 'Pick up Tom from airport',
        done: false
    },
    {
        text: 'Visit party',
        done: false
    },
    {
        text: 'Visit doctor',
        done: true
    },
    {
        text: 'Buy meat',
        done: true
    },
];
const renderTasks = tasksList => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({
            text,
            done
        }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);
            debugger;
            return listItemElem;
        });
    listElem.append(...tasksElems);
};
renderTasks(tasks);

// How Web works
//1.add actual data
//2.render
//Aldo
//1.add eventLister
//2.create task object
//3.add task to the array
//4.re render
const addTask = (event) => {
    const inputEl = document.querySelector('.task-input');
    const task = {
        text: inputEl.value,
        done: false
    }
    tasks.push(task)
    renderTasks(tasks)
}
const createBtn = document.querySelector('.create-task-btn')
createBtn.addEventListener('click', addTask)