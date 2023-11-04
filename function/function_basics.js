// declaration of function
// call back function ara called anonymous function without name

function hello() {
    console.log("Hello world")
}

const fun2 = () => {
    console.log(" hello world 2")
}

// return function reference
hello
// execute function
fun2()

// function with parameters
const fun3 = (num1, num2) => {
    console.log(num1 + num2)
}

const funvalue = fun3(4, 5)
fun3("4", 5)
// we will not get any value in funvar var bcz fun3 not return any value it do only print 
console.log(funvalue)


// function with return type use when we want to store function value in any variable
function add(num1, num2) {
    return num1 + num2
}
const sum = add(7, 9)
console.log(sum)

// provide default value to parameter
function fullname(firstname, lastname = " kumar") {
    return `Your fullname is ${firstname} ${lastname}`
}
// const fullName = fullname("sanjeev", "Kumar")
const fullName = fullname("sanjeev")
console.log(fullName)