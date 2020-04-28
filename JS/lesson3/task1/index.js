//const getTotalPrice = arr => {
//   const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
//  return '$' + Math.floor(sum * 100) / 100;
const getTotalPrice = arr => {
    const sum = numberLists.reduce(function callback(acc, num) {
        return acc + num;
    }, 0);
    console.log(sum)
    return '$' + Math.floor(sum * 100) / 100;
};