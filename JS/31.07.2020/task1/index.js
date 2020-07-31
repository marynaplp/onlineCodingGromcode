//1. Learn requirements
//2. Create step by step algo( & input / output
//for funtions)
//3. Create prototype solution & testing
//4. Final testing & refactoring - > final solution

//algo
//iterate numbers from 1 to n
//check if prime number
//"use strict"

function isPrime(num) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(6));
console.log(isPrime(11));
console.log(isPrime(20));



function getPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }

    }
}
getPrimes(10)