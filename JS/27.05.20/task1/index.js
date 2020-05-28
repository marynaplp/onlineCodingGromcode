//console.log(itemElem.textContent);

// itemElem.onclick = function() {
//     console.log('a');
// }
// itemElem.onclick = function() {
//     console.log('b')
// }
// const itemElem1 = document.querySelector('.list-item:first-child');

// function sayHi1() {
//     console.log(itemElem.textContent);
// }
// itemElem1.addEventListener('click', sayHi1);

// const itemElem2 = document.querySelector('.list-item:nth-child(2)');
const itemElem1 = document.querySelector('.list-item:first-child');

function sayHi(event) {

    console.log(event.target.textContent);
    console.log(event.target === itemElem1);
}

itemElem1.addEventListener('click', sayHi1);


itemElem2.addEventListener('click', sayHi);



const itemElem3 = document.querySelector('.list-item:last-child');



itemElem3.addEventListener('click', sayHi);