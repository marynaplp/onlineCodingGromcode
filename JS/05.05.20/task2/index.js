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


function getCustomersList(obj) {
    return Object.entries(obj).map(
        (entry) => Object.assign(entry[1], {
            id: entry[0]
        })
    ).sort((a, b) => {
        a.age - b.age // берет  соседние елементи  

    })

}