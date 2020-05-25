export class Sportsman {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`)
    }
}
export class Swimmer extends Sportsman { // наследется
    constructor(name, style) {
        super(name);
        this.style = style;
    }
    swim() {
        console.log(`${this.name} is swimming ${this.style}`)
    }
}
// toString() {
//     console.log('Pa-bam') // вивела в процесе работе 
//     return undefined;

// }

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

//console.log(sw1);