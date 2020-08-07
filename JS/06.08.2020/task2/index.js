//input: array, array 
//output: object

//algo
//iterate keyList with reduce
//getkey/value and add to res object
//add to res object

//const  buildObject = (keysList, valuesList) => {
//    return keysList.reduce((acc, key, index) =>
//Object.assign(
//acc, {
//[key]: valuesList[index]

//}), {}
//)
//}

// function buildObject(keysList, valuesList) {
//     keysList.reduce((acc, curValue, index) => {
//         console.log(curValue);
//         console.log("VALUE" + valuesList[index]);
//         const res = {...acc, [curValue]: valuesList[index] };
//         //TODO finish solution
//         return res;
//     }, {});
// }

function buildObject(keysList, valuesList) {
    return keysList.reduce((acc, key, index) => {
        return {...acc, [key]: valuesList[index] };
        //TODO finish solution

    }, {});
}
// [key]-вичислительное свойтсво


// computed property
//const obj = { name: test };

//const key = "age"

//return (Object.assign(obj, {
//[key]: 100
//}))