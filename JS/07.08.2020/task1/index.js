// const obj1 = {
//     name: "Denis"
// }
// const obj2 = {
//     name: "Denis"
// }
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

        return obj1[key] === obj2[key];

    }, true);
}


console.log(compareObjects(obj1, obj2));