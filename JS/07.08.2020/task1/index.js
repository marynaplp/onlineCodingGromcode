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

function compareObject(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    console.log(keys1)
    console.log(keys2)
    if (keys1.length !== keys2.length) {
        return false
    }
    key1.forEach(key => {
            console.log("KEY" + key);
            console.log("VALUE2" + obj[key])

            console.log("KEY2" + key2[index]);
            console.log("VALUE" + obj2[keys2[index]]);



        )
    }