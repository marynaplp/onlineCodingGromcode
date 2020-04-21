//input:array
//output:boolean (true/false)

function some(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        //  функция виполнилась один раз потому омы всегда будеи виполнять одно  условие. то есть до первого   куегкт 
        // После return  функция не виведится. 
        // 
        console.log('==> run');
        if (arr[i] % 3 !== 0) {
            return true;
        }
        return false;

    }

}
const numbers = [4, 5, 3, 4, 5];
const result = some(numbers);
console.log('result', result);