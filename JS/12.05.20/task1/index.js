// input: none
// outcome:function


const makeCounter = () => {
    let counter = 0;
    return function counter() {

        return ++counter;
    };
};
//  мы постоянно  будет перезаписиватся наше значение
export { makeCounter }