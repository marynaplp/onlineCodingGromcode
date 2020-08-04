// create empty array
// iterate the array/ and call callback 
// 

//input: array, function
//output:array

//callback
//input: number, number, array
//output: boolean

function filterArray(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) result.push(arr[i])
    }

    return result
}


// //Testing filter
let array = [10, 30, 1, 8, 122];
const callback = element => {
    return element > 20;
}
console.log(filterArray(array, callback))
    //console.log(array.filter(callback))





// const callback1 = (element, index, array) => {
//     console.log("ELEMENT: " + element);
//     console.log("INDEX: " + index);
//     console.log("ARRAY: " + array);