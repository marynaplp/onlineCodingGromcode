 function printMessage(age) {
     console.log(`Hello ${this.firstName}, email${this.email}, age:${age}`);

 }
 let user = {
         firstName: "Alex",
         email: "gmail.com"
     }
     //  printMessage.bind(user)(30, 'Kiev'); // returns function
     //  printMessage.bind(user, 30)('Kiev');
     //  printMessage.bind(user, 30, 'Kiev')();
     //use bind

 //input:function, obj(context usually  an object), arg1,arg2...argN
 //output: function
 //function bind(func, context, ...args) { ///соберет все аргумент и закинетт в массив
 //console.log(args);
 // return func.bind(context, ...args);
 //}
 //bind(printMessage, user)(30, 'Kiev');
 //bind(printMessage, user, 30)('Kiev');
 //bind(printMessage, user, 30, 'Kiev')();



 //
 //use call/apply 
 // function bind(func, context, ...arg) { ///соберет все аргумент и закинетт в массив

 // }

 //custom bind
 //input:function, obj(context usually  an object), arg1,arg2...argN
 //output: function

 //alogoritm
 // put the func in the conext
 //call function as object property

 //  function bind(func, context, ...bindArgs) { ///соберет все аргумент и закинетт в массив
 //      return function(...funcArgs) {
 //          let copy = Object.assign({}, context);
 //          copy.tempFunction = func;
 //          let result = copy.tempFunction(...bindArgs, ...funcArgs)
 //          delete copy.tempFunction;
 //          return result

 //      }
 //  }

 //  bind(printMessage, user)(30, 'Kiev');
 //  bind(printMessage, user, 30)('Kiev');
 //  bind(printMessage, user, 30, 'Kiev')();




 // function bind(func, context, ...args) {
 //     return function(...funcArgs) {
 //         console.log(funcArgs, args);
 //         let res = func.apply(context, funcArgs.concat(args))
 //         console.log(res);
 //         return res;
 //     }
 // }

 const myBind = (func, context, ...args) => {
     console.log("Step1")
     return function() {
         console.log("Step2")
         return func.call(context, ...args)
     }
 }
 const printMessageBinded = myBind(printMessage, user, 200, "Kiev");
 printMessageBinded()


 //  const myBind1 = (func, context, ...args) => {
 //      console.log("Step 1");
 //      return function(...targerArgs) {
 //          console.log("Step2");
 //          return func.call(context, ...args, ...targetArgs);
 //      }
 //  }

 //  const printMessageBinded2 = myBind1(printMessage, user, 200);
 //  printMessageBinded2("Lviv")


 //Option 2

 //  const mySuperBind = (func, context, ...args) => {
 //      console.log('Step 1');
 //      return function() {

 //          console.log(context)
 //          context.tempFunction = func;
 //          console.log(context);
 //          context.tempFunction(...args)
 //      }
 //  }

 //  const printMessageBinded3 = mySuperBind(printMessage, user, 50)

 //  printMessageBinded();