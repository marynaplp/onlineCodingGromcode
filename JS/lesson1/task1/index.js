function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const result = []
    for (let i = 0; i < arr.length; i += 1) {
        const square = arr[i] * arr[i];
        result.push(square);

    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const result = squareArray(numbers);
console.log('result', result);
console.log('numbers', numbers);