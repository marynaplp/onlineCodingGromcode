// input: none
// outcome:function


function makeCounter() {
    let counter = 0;
    return function count() {

        return ++counter;
    };
};

const counter1 = makeCounter();
const counter2 = makeCounter();
//  мы постоянно  будет перезаписиватся наше значение

//export { makeCounter }