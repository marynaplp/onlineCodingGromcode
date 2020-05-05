function buildObject(keyList, valuesList) {
    keyList.reduce((acc, key, index) => {
        return {
            [key]: valueList[index]
        } /// перезаписивает  значение  


    }, obj);
}

let keys = ['name', 'age'];
let values = ['Tom', 40]