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