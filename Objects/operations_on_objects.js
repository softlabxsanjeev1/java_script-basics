const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }


// merge values of two arrays
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)

// merge object values by using assign operator
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)


// cloning of object


// array of objects   => use loop and map to access all objects of array
// basicaly use when we call appy api return array of objects

const users = [
    {
        id: 1,
        email: "sanjeev@mail"
    },
    {
        id: 1,
        email: "sanjeev@mail"
    },
    {
        id: 1,
        email: "sanjeev@mail"
    },
]

console.log(users[1].email)
//return keys of object
console.log(Object.keys(users));
console.log(Object.values(users));
// return key values-pair
console.log(Object.entries(users));

// check that given property is available or not
console.log(users.hasOwnProperty("email"))

// check that given property is available or not
console.log(obj1.hasOwnProperty(1))


// object destructuring 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sanjeev Kumar"
}

// destructuring of object 
const { courseInstructor } = course
console.log(courseInstructor)
// provide alias name to the property 
const { courseInstructor: instructor } = course
console.log(instructor)



// object cloning