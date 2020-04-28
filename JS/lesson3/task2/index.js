const numbersList = [4, 6, 3, 2];

function callback(acc, num) { // визвался 3 раза как не было  указано точки отсчета 
    // массив уменьшаент масив к одному значению 
    console.log(acc, num)
    const newAcc = acc + num;
    return newAcc;
    // return undefined; /// имеет зачение что  мы возвращаем 
}

const sum = numbersList.reduce(callback, 0) // 4632 -конкатенация строк проис
console.log('result: ', sum);