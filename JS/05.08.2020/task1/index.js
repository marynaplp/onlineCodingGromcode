//const multiply = (...args) => args.reduce((accum, val) => accum * val)

//console.log(multiply(10, 5, 6, 7))

// input:number
//output:number

//algor
//1.gather all alguments
//2.multiply
// function multiply(...args) {
//     console.log(args)
//     let res = 1;
//     args.forEach(el => {
//         res = res * el
//     })
//     return res
// }
// const multiplyRes = (multiply(10, 20, 49, 8))

// console.log(multiplyRes)

// function multiply(...args) {
//     console.log(args);
//     args.reduce((accumulator, currentValue) => {
//         console.log("REDUCE CALLBACK IS CALLED")
//         console.log(res)
//         console.log(currentValue);
//         return 1111
//     });
// return res
//}


function multiply(...args) {
    return args.reduce((res, currentValue) => res * currentValue)
}

const multiplyRes = (multiply(10, 20, 49, 8))

console.log(multiplyRes)

//...args - rest operator