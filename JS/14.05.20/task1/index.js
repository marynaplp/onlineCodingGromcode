var a = 17 // global lexical enviroment 

function test() {
    var a = 10;

    if (a) {
        var a = 1;
        console.log(a);
    } //приведение типов (if = true)
    console.log(a)
};
test()
console.log(a);

//var перезаписивает  значения