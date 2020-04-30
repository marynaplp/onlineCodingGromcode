'use strict';
const obj = {
    name: 'Tom',
    age: 17,
    student: false,
    address: {
        country: 'Ukraine'
    },
    'two words': 'tricky prop' ///помилка якщо з двух  слов будет ошибка без  кавичек будет ошибка 
};
/* выведите в консоль значение свойства 'name' с помощью точки */
console.log(obj.name)
    /* выведите в консоль значение свойства 'name' с помощью квадратных скобок */
console.log(obj['name'])

const key = 'age'
    /* выведите в консоль значение свойства название которого находится в переменной key */
console.log(obj[key])

/* выведите в консоль значение свойства 'country' */
console.log(obj.address["country"])

console.log(obj.address.country);

/* присвойте объекту свойство hobby со значением 'football' */
obj.hobby = 'football'
    //obj['hobby'] = 'basketball';
    // obj['hobby'] = 'football';
const anotherKey = 'married';
/* название свойства хранится в переменной anotherKey. Присвойте объекту такое свойство со значением false */
obj[anotherKey] = false;
/* присвойте объекту свойство 'favorite music' со значением 'rock' */
obj['favorite music'] = 'rock';
/* выведите в консоль объект obj */
console.log(obj)