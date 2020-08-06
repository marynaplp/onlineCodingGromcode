// input: object
//output: object

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;

}

function addPropertyV2(userData, userId) {
    Object.assign(userData, {
        id: userId
    })
    return userId
}

function addPropertyV3(userData, userId) {
    const newObj = Object.assign({}, userData, {
        id: userId
    });
    newObj.id = userId;
    return newObj;
}

function addPropertyV4(userData, userId) {
    const userDataCopy = {...userData }
    return addPropertyV2(userDataCopy, userId)

}
// const obj = {
//     name: 'Maryna',
//     age: 100,
//     city: "Kiev"
// }
// console.log(addPropertyV1(obj, "464747"))