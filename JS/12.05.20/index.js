// input: none
// outcome:function


function makeCounter() {
    let counter = 0;
    return function count() {

        return ++counter;
    };
};
//  мы постоянно  будет перезаписиватся наше значение
export { makeCounter }