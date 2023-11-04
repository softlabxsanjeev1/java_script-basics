var str = "Javascript is a Great language";

// length to find length of string also count white space
let strlength = str.length;
console.log(`Length of string = ${strlength}`)

// to lower case
console.log(`Lower case = ${str.toLowerCase()}`)
// to uppercase
console.log(`Upper case = ${str.toUpperCase()}`)

// includes() use to check presence of Character or Word
console.log(str.includes("Javascript"))

// startswith()  check presence of word start with given string
const start = str.startsWith("Java")
if (start) {
    console.log("Present")
} else {
    console.log("Not Present")
}
// endswith() check presence of word ends with given string
const end = str.endsWith("age")
if (end) {
    console.log("Present")
} else {
    console.log("Not Present")
}
// search() work like include return index of given string  (find onlu first occurence)
let position = str.search("is")
console.log(position)

// match() same as search but return all string occur  return array
let str1 = "Javascript is a Great is language a";
let indexes = str1.match(/is/g)
console.log(indexes)


//indexOf() return index no first occurence of given string or char
console.log(str1.indexOf("is"))

//lastIndexOf() return index no first occurence of given string or char from last
console.log(str1.lastIndexOf("is"))


//replace()
let str3 = "Php is a Great is language a";
str3 = str3.replace("Php", "Javascript")
console.log(str3)
// replace all the given string  => use regular expression
str3 = str3.replace(/is/g, "are")
console.log(str3)

//trim()  => remove space before the word
let str4 = "   Sanjeev    ";
console.log(str4)
console.log(str4.trim())

//charAt() return character at that index position
console.log(`Character at ${3}rd position =>  ${str1.charAt(3)}`)


//fromCharCode()
var a = String.fromCharCode(100)
console.log(a);

//concat()
var b = "Sring 1  "
var c = "String 2"
console.log(str4.concat(b, c))


//split() convert into array need to pass seprator from where we want to break the string
console.log(b.split(" "))


//repeat() print string multiple times
console.log(str.repeat(2))


//slice()  => use to pick word between string
console.log(str.slice(3, 10))
console.log(str.slice(-1))


//substr() work like slice parameter (start index no,how many char we want)
console.log(str.substr(3, 5))


//substring() work like slice parameter (start index no, last word index position)
console.log(str.substring(3, 7))


//toString() convert any type value into string
var num = 56
console.log(typeof (num))
console.log(num = num.toString())
// implicit typecasting
console.log(typeof (num))
