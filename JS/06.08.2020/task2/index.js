//input: array, array 
//output: object

//algo
//iterate keyList with reduce
//getkey/value and add to res object

const buildObject = (keysList, valuesList) => {
    return keysList.reduce((acc, key, index) => {
        return {
            ...acc,
            [key]: valuesList[index]
        }
    }, {})
}