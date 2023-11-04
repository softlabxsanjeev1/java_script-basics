// pass multiple values in function use rest operator  
// no statement execute after return 

const func1 = (...marks) => {
    return marks
}

const result = func1(1, 3, 4, 5)
console.log(result)

// first two arguments stroe in value and rest or arg store in marks 
const func2 = (val1, val2, ...marks) => {
    return marks
}
const result1 = func2(1, 3, 4, 5)
console.log(result1)


// pass object in function and use it 
const user = {
    username: "Sanjeev",
    price: 200
}

// this fun extract value of object that we pass in argument use wen we make cards in react 
// we need to pass same property that it is available in that object or not typescript automatically check this
const handleObject = (anyObject) => {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)


// a function that take array as an argument and return its value
const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray) {
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray))