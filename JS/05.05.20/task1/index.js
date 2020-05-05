function buildObject(keyList, valuesList) {
    return keyList.reduce((acc, key, index) => {
        return {...acc,
            [key]: valuesList[index]
        } /// перезаписивает  значение  


    }, obj);
}