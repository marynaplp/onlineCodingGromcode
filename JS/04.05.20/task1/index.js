//const addPropertyV1 = (userData, userId) => {
//   userData.id = userId;
//return userData;
//}

//input: object, string
//returns: object
function addPropertyV1(userData, userId) {
    userDate.id = userId;
    return userData;

}
//const addPropertyV2 = (userData, userId) => {

// const newObj = Object.assign(
// userData, {
//   id: userId
//  });
// return newObj;
//}
//function addPropertyV2(userData, userId) {
//   Object.assign(userData, { id: userId });
// return userData;

//}
const addPropertyV2 = (userData, userId) => Object.assign(userData, { id: userId });
//code readybility 
const addPropertyV3 = (userData, userId) =>
    Object.assign({}, userData, { id: userId });


//const addPropertyV4 = (userData, userId) => {
//   let copy = {...userData };
//   copy.id = userId;
//  return copy;
//}
function addPropertyV4(userData, userId) {
    return {...userData, id: userId };
}