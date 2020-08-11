const obj1 = {
    name: "Denis",
    age: 20,
    city: "Kiev"
}
const obj2 = {
        name: "Anna",
        age: 21,
        city: "Odessa"
    }
    //solution
    //input: object, object
    //output: boolean

//algo
//1.compare key lenth, if not equal - false
//2. iterate obj1 key
//compare values, if not equal - false

function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length)
        return false;

    return keys1.reduce((acc, key) => {
        if (acc === false)
            return false;

        return obj1[key] === obj2[key]

    }, true);
}
// const compareObjects = (obj1, obj2) => {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) {
//         return false;
//     };
//     let res = true;
//     keys1.forEach((key) => {
//         if (obj1[key] !== obj2[key]) {

//             res = false;
//         }
//     });
//     return res;
// };
//retrun !keys1.some(key =>obj1[key] !==obj2)


// const compareObjects = (obj1, obj2) => Object.entries(obj1).toString() === Object.entries(obj2).toString();
// console.log(compareObjects(obj1, obj2))
// 

// function compareObjects(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
//     return keys1.reduce((acc, key) => obj1[key] === obj2[key], true);
// }
console.log(compareObjects(obj1, obj2))