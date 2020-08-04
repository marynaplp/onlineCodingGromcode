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
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
//Testing
let array = [10, 30, 1, 8, 100, 20, 21, 123];

const callback = (element) => {
    const rest = element > 20;
    return rest
}
filterArray(array, callback)
    //console.log(array.filter(callback))



//Testing filter


let array1 = [10, 30, 1, 8, 100];

const callback1 = (element, index, array) => {
    console.log("ELEMENT: " + element);
    console.log("INDEX: " + index);
    console.log("ARRAY: " + array);


    const res = element > 20;
    return res
}