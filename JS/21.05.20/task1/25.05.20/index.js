class Sportsman {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.married = false;
        // this.run = function() {
        //     console.log(`${this.name} is running`)
    }
    run() {
            console.log(`${this.name} is running`)
        }
        // toString() {
        //     console.log('Pa-bam') // вивела в процесе работе 
        //     return undefined;

    // }
}
// const user1 = new Sportsman('Bob', 17);
// console.log(user1);
// console.log(user1.run());
//   ссылается на гобальний объект. Цепочка прототипного наследования 

// const user2 = new Sportsman('Tom', 17);
// user2.run();
// console.log(user1.run === user2.run)

// function delenie(a, b) {
//     return a / b;
// }
// console.log(delenie(5, 10));
class Swimmer extends Sportsman { // наследется
    constructor(name, style) {
        super(name);
        this.style = style;
    }
    swim() {
        console.log(`${this.name} swimming ${this.style}`)
    }
}
const sw1 = new Swimmer('John', 'style1');
//console.log(sw1);

sw1.run();