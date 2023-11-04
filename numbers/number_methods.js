document.write("<h1><u>Number Methods</u></h1>");

//number() change any type of value into number

var a ="99";
var num = Number(a);
document.write(num+10+"<br>");



// parseInt() return integer value
var a = 20.40;
var num = parseInt(a);
document.write(num+"<br>");


// pasrFloat() return float value
var a = 20.40;
var num = parseFloat(a);
document.write(num+"<br>");


//isFinite()
var a = 100;
var num = Number.isFinite(a);
document.write(num+"<br>");

//isInteger()
var a = 10;
var num = Number.isInteger(a);
document.write(num+"<br>");


// toFixed()  this fun decides that how many no. we want after decimal
var a = 10.45677;
var num = a.toFixed(2);
document.write(num+"<br>");


//toPrecison() return round of value after decimal point
var a = 10.7689;
var num = a.precision(3);
document.write(num+"<br>");