//input:object
//output: array of object

//algo
// 1. array with Object array
//2.get key value
//3. map
//.sort const customers = {

const getCustomerList = (obj) => {
    console.log(Object.entries(obj));
    Object.entries(obj).map(el //ach of the object
        => {
            console.log(el)

            const res = {...el[1], id: el[0] }
            console.log(el[1]) // ["customer-id-2", {…}]
            console.log(el[0]) // 1: {name: "Tom", age: 17}
            return res

        })
}


//testing
const customer = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },

};
console.log(getCustomerList(customer))