// Initialize array 
const array1 = [1, 3, 4, 5, 6, 7, 8, 9]
const names = ["sanjeev", "rajeev", "satish", "vipin", "sandeep", "harinder", "sunil", "satish"]
console.log(array1);
console.log(array1[2])
console.log(array1.length - 1)


// Operation on array 
console.log(" ----------- Operation in array -----------")

// Add element   => (push or unshift )
console.log("------ add elements------")
//at start
array1.unshift(0);
console.log(array1)
//at end
array1.push(10);
console.log(array1)


// remove element
console.log("-----remove element------")
// from start
const first_element = array1.shift()
console.log(first_element)
// from end
const last_element = array1.pop()
console.log(last_element)

// add element at given index no 
array1[0] = "Sanjeev"
console.log(array1)




// return index no of the given element 
// search from start 
console.log(names.indexOf("satish"))
// search from last
console.log(names.lastIndexOf("satish"))


// check ele is present or not return true/false
console.log(names.includes("sanjeev"))

// check from given index position
console.log(names.includes("sanjeev", 3))


// check presence of element on the bases of value we use call back function
// find = check untill it fin first first accurence then stop
let channels = [
    { name: "technoyt", subscriber: 2000 },
    { name: "talentHub", subscriber: 5000 },
    { name: "PcHub", subscriber: 500 },
    { name: "computer Gyan", subscriber: 5000 }
]
console.log(channels.find((element) => {
    return element.subscriber === 5000
}))

// add two arrays return new array
let name1 = ["Sanjeev", "Ramana", "Arun"]
let name2 = ["Akshit", "harinder", "Amana"]

// add two array with the help of string
console.log([...name1, ...name2])
console.log(name1.concat(name2))



// loops  = print array elements with the help of itration
// for loop
for (let i = 0; i < name1.length; i++) {
    console.log(name1[i])
}


//  for of
for (let name of name1) {
    console.log(name)
}

// for-each
name1.forEach((name, index) => {
    console.log(index, name)
})

//join  = return string
let student = ['S', 'h', 'i', 'v', 'a']
student = student.join('_');
console.log(student)
console.log(typeof (student))

// split  = return array
student = student.split('_')
console.log(student)
console.log(typeof (student))


// filter = check all till ast of Array

let cities = [
    { name: "Mumbai", population: 3560000 },
    { name: "Chennai", population: 2045600 },
    { name: "Haryana", population: 300543470 },
    { name: "Telabaib", population: 4483300 },
    { name: "Mathura", population: 78933000 }
]

console.log(cities.filter(city => city.population > 3560000))

//map use to perform operation with on every element of existing array
console.log(cities.map(city => city.population * 2))

console.log(cities)
