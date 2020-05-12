// input: none
// outcome:function


const makeCounter = () => {
    let counter = 0;

    return function() {
        return counter++;
    };
};

export { makeCounter };
//  мы постоянно  будет перезаписиватся наше значение