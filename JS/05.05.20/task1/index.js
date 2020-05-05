const buildObject = (keysList, valuesList) => {
    return keysList.reduce((acc, key, index) => {
        return {
            ...acc,
            [key]: valuesList[index]
        }
    }, {})
}