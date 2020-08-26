class Sportsman {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`);
    }
}
class Swimmer extends Sportsman {
    constructor(name, style) {
        super(name);
        console.log(this);
        console.log("Constructor Swimmer", name);
        this.style = style;
    }
    swim() {
        console.log(`${this.name} is swimming ${this.style}`)
    }
    test() {
        console.log(this)
    }
}
//testing
const sportsman = new Sportsman("Denis")

console.log(sportsman)

// const sportsman1 = new Sportsman("Andrey")
// sportman1.run()
// const sportsman2 = new Sportsman("Marina")
// sportsman2.run()

const swimmer1 = new Swimmer("Maryna",
    'teststyle')
console.log(swimmer1)
swimmer1.test();
swimmer1.swim();
swimmer1.run()
    // obj1 = {
    //     name: "Denis",
    //     run() {
    //         console.log(`${this.name} is running`);
    //     }
    // }
    // console.log(obj1)