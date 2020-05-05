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

const getCustomersList = obj => Object.entries(obj)
    .map(el => ({
        id: el[0],
        ...obj[el[0]]
    }))
    .sort((a, b) => a.age - b.age);

console.log(getCustomersList(customers));