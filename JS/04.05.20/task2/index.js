const mergeObjectsV1 = (obj1, obj2) => {
    return Object.assign({}, obj1, obj2)
}


const mergeObjectsV2 = (obj1, obj2) => {
    return Object.assign({}, obj2, obj1) ///  мутируется obj2
}

const mergeObjectsV3 = (obj1, obj2) => {
    return {...obj1, ...obj2 }
};


const mergeObjectsV4 = (obj1, obj2) => {
    return {
        ...obj2,
        ...obj1
    }
};