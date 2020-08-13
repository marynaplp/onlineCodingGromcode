//hoisting example 1
console.log(message);
var message = 'Hoisting is here!';
//  var вспливают и в глобальном окружении

//hoisting example 2
var a = 55;
console.log(a);

if (a) {
    var a = 1;

    console.log(a);
}

console.log(a);


//hoisting example 3
var a = 77;
console.log(a);

function print() {
    var a = 2;
    console.log(a);
}
print();

console.log(a);