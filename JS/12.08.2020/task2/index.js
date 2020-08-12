//Applications

function makeCounter() { // outer lexical enviroment 
    let count = 0;
    return function() { // closure
        return count++;
    };
}

const counter1 = makeCounter(); //created one lexical enviroment
console.log(counter1()) // have link tomakeCounter and it will work