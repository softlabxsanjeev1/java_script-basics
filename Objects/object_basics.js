// initialize object  key-value pair

// non singleton return empty object
const obj1 = {}

console.log(obj1)


// object literals non singleton object
const JsUser = {
    firstName: "Sanjeev",
    lastName: "Kumar",
    "full name": "  Sanjeev Kumar  ",
    age: 23,
    location: "Haryana",
    email: "Sanjeevyadav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    function1: function () {
        console.log("function inside object")
    }
}


// ways to access objects
console.log(JsUser)
console.log("----------values access methods-----------")
console.log(JsUser.firstName)
// assess object value by using squarenotation
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser["full name"].trim())
console.log(JsUser["full name"].length)
console.log(JsUser["lastLoginDays"])


// change object values
JsUser.email = "sanjeev7056@gmail.com"
console.log(JsUser["email"])

// freeze object no one change objects data/values of key
// Object.freeze(JsUser)

JsUser.email = "sanjeevyadav@gmail.com"
console.log(JsUser)

// assign function in an object
JsUser.greeting = () => {
    console.log("Hello sanjeev")
}

JsUser.greetingTwo = () => {
    console.log(`Hello Js User your last name is ${this.firstName}`)
}

// way to access function of an object
// return function 
console.log(JsUser.greeting)
// execute function
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



// singleton object return empty object
const tinderUser = new Object()

console.log(tinderUser)
// assign key and values to object
tinderUser.id = "12345"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

