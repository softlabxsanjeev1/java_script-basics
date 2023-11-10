console.log("------------First method--------------");
function sayhello(){
    console.log("Hello");
}

function add(num1,num2,callback){
    var sum = a + b;
    console.log("Sum of two numbers = "+sum);
    callback();
}

let a = 10;
let b = 30;

add(a,b,sayhello);


// program 2 of callback function  -- assign function value to an argument.


console.log("-------second method--------");
function result(res){
    console.log("Result = "+res);
}

function subtract(n1,n2){
    sub = n1 - n2;
    return sub;
}

let c = 100;
let d = 10;

let printres = subtract(c,d);
result(printres);


// program 3 of callback function  -- calling a funtion in a function

console.log("-------Third method--------");
function display(val){
    console.log("Multiplication of two numbers  = "+val);
}

function addition(num1,num2){
    var multiply = a * d;
    display(multiply);
}

addition(a,d);