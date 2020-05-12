// input: none
// outcome:function



function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
};

//  мы постоянно  будет перезаписиватся наше значение

export { makeCounter }