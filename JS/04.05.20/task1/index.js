//input: object, string
//returns: object
function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

const addPropertyV2 = (userData, userId) => Object.assign(userData, { id: userId });
//code readybility 
const addPropertyV3 = (userData, userId) =>
    Object.assign({}, userData, { id: userId });

function addPropertyV4(userData, userId) {
    return {...userData, id: userId };
}