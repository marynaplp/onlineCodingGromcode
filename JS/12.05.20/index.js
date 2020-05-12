// input: none
// outcome:function


const makeCounter = () => {
    let counter = 0;
    return function() {

        return counter++;
    };
};
//  мы постоянно  будет перезаписиватся наше значение
export { makeCounter }