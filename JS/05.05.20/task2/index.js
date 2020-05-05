const customers = {
    'customer-id-1': {
        name: 'Wiliam',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};

const getCustomersList = (obj) => {
    return Object.entries(obj).map(
        (arr) => {
            let obj1 = arr[1];
            return Object.assign(obj1, {
                id: arr[0]
            })
        }
    ).sort((a, b) => a.age - b.age)
}