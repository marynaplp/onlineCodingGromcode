//1. Learn requirements
//2. Create step by step algo( & input / output
//for funtions)
//3. Create prototype solution & testing
//4. Final testing & refactoring - > final solution

//algo
//iterate numbers from 1 to n
//check if prime number
"use strict"

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function getPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            console.log(i);
        }

    }
}