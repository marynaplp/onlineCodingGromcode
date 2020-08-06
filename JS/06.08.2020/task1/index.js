// input: object
//output: object

const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
}

const addPropertyV2 = (userData, userId) => {

    const newObj = Object.assign(
        userData, {
            id: userId
        });
    return newObj;
}

const addPropertyV3 = (userData, userId) => {

    const newObj = Object.assign({}, userData, {
        id: userId
    });
    newObj.id = userId;
    return newObj;
}

const addPropertyV4 = (userData, userId) => {
    const newObj = Object.assign({
        ...userData
    }, {
        id: userId
    });
    return newObj;
}

// const obj = {
//     name: 'Maryna',
//     age: 100,
//     city: "Kiev"
// }
// console.log(addPropertyV1(obj, "464747"))