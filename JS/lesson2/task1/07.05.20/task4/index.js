const getCustomersList = (customers) => {
    const copy = JSON.parse(JSON.stringify(customers));
    let customersArray = Object.entries(copy);
    return customersArray
        .map((customer) => {
            customer[1].id = customersArray[customersArray.indexOf(customer)][0];
            return customer;
        })
        .map((customer) => customer[1])
        .sort((a, b) => a.age - b.age);
};


const getCustomerList = (obj) =>
    Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => a.age - b.age)