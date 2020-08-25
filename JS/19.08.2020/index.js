function printMessage(age, city) {
    console.log(this);
    console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}
let user = {
        name: "Alex",
        email: "gmail.com",
    }
    //printMessage(100, "Lviv")

// //input: obj, arg1 ....argN
// // output: func


// const printMessageBinded = printMessage.bind(user);
// printMessageBinded(100, "Lviv")

//input:func, obj, arg1 ...argN
//input:

const myBind = (func, context, ...args) => {
        const myBind = (func, context, ...args) => {
            console.log("Step1")
            return function() {
                console.log("Step2")
                return func.call(context, ...args)
            }
        }
        const printMessageBinded = myBind(printMessage, user, 200, "Kiev");
        printMessageBinded()


        const myBind1 = (func, context, ...args) => {
            console.log("Step 1");
            return function(...targerArgs) {
                console.log("Step2");
                return func.call(context, ...args, ...targetArgs);
            }
        }

        const printMessageBinded2 = myBind1(printMessage, user, 200);
        printMessageBinded2("Lviv")


        //Option 2

        const mySuperBind = (func, context, ...args) => {
            console.log(context)
            context.tempFunction = func;
            console.log(context);
            context.tempFunction(...args)
        }

        constprintMessageBinded3 = mySuperBind(printMessage, user, 50)

        printMessageBinded3();