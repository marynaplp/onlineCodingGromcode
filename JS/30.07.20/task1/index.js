/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */
// ... code here
function getSenseOfLife() {
    return 42;
}
const res = getSenseOfLife()
console.log(res);
console.log(getSenseOfLife());


/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */
// ... code here
function getSquared(num) {
    return num * num
}
console.log(getSquared(30))
    /* ф-ция sum должна принимать два числа и вернуть их сумму */
    // ... code here

function sum(a, b) {
    return a + b
}
console.log(sum(6, 3))
    /*
     * ф-ция sum должна принимать число
     * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
     * где 34 - число, полученное в аргументах
     */
    // ... code here
function print(num) {
    console.log('I am' + num + 'years old ');

}
print(34);

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */
// ... code here
const mult = (num1, num2) => num1 * num2

console.log(mult)
console.log(mult(10, 1))


/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */
// ... code here
const square = num => num * num;

console.log(mult(25))

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */
// ... code here
const getMagicNumber = () => {
    return 17
}