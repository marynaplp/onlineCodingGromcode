   const listElem = document.querySelector('.list');
   export const renderList = tasks => {
       listElem.innerHTML = '';
       const listItemsElem = tasks
           .sort((a, b) => a.done - b.done)
           .sort((a, b) => sortTasks(a, b))
           .map(task => createListElement(task))
       listElem.append(...listItemsElem);
   };

   const sortTasks = (a, b) => {
       if (a.done - b.done !== 0) return a.done - b.done;
       if (a.done && b.done)
           return (new Date(b.doneDate) - new Date(a.doneDate));
       if (!a.done && !b.done)
           return b.createDate - a.createDate
   }

   //input: object
   //output: htmlElement
   const createListElement = (task) => {
       const listItemElem = document.createElement('li');

       listItemElem.classList.add('list__item');;
       const checkboxItem = document.createElement('input');

       checkboxItem.setAttribute('type', 'checkbox');
       checkboxItem.checked = task.done;
       checkboxItem.dataset.id = task.id
       if (task.done) {
           listItemElem.classList.add('list__item_done');
       }
       checkboxItem.classList.add('list__item-checkbox');
       listItemElem.append(checkboxItem, task.text);
       return listItemElem;
   }