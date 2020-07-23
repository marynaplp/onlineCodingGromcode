//todo list
/// 1.create array of events (where we store data) and create test events
/// 2. write render event function //отрисовка массива в html 
//// 3. addEventListener for all  checkbox
///4.  добавить eventListener  на  сheckbox, поменять инфу, обновить  инфу and render tasks;

/// 6.create handler - create task and put ta the render tasks
const listElem = document.querySelector('.list')
const tasks = [
    { text: 'Buy milk', done: false, id: 1 },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 2
    },
    {
        text: 'Visit party',
        done: false,
        id: 3,
    },
    {
        text: 'Visit doctor',
        done: true,
        id: 4
    },
    {
        text: 'Buy meat',
        done: true,
        id: 5
    },
];

const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map((task) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', task.id);
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, task.text);
            return listItemElem;
        });
    listElem.append(...tasksElems);
};

renderTasks(tasks)
const todoListElem = document.querySelector('.list');
todoListElem.addEventListener('click', onToggleTask);

// algo
//1.check if checkbox is clicked, if not -exist
//2.get checkbox data-id
//3.finc by task id
//4.update task
//5.render tasks
function onToggleTask(event) {
    if (!event.target.classList.contains('list__item-checkbox')) {
        return
    }
    let task = tasks.find(task => task.id === event.target.dataset.id);
    task.done = event.target.checked;
    renderTasks(tasks);
}

//algo
//1.get element btn from DOM
//2.check if task has the value
//3.add new task 
//4.renders tasks 
//5.put addEventListener on btn
const btn = document.querySelector(".create-task-btn");

function onCreateTask() {
    const onCreateTask = document.querySelector('.task-input');
    const countTasks = tasks.length + 1;
    if (!onCreateTask.value) return false;


    tasks.push({
        text: onCreateTask.value,
        done: false,
        date: new Date,
        id: countTasks.toString(),
    });
    onCreateTask.value = "";

    renderTasks(tasks)

}
btn.addEventListener("click", onCreateTask);