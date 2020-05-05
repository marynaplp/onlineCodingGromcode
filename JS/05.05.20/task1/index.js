function buildObject(keyList, valuesList) {
    keyList.reduce((acc, key, index) => {
        return {...acc,
            [key]: valuesList[index]
        } /// перезаписивает  значение  


    }, {});
}