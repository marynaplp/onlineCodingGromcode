// input: none
// outcome:function



const makeCounter = () => {
    let count = 0;
    return function() {
        return count++;
    };
};
const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
counter1();
counter1();
counter2();
//  мы постоянно  будет перезаписиватся наше значение

export { makeCounter }