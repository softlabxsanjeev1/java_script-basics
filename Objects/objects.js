document.write("<u><h1>Objects</h1></u>");     // objects
var a= {
    fname : 'sanjeev',
    lname : 'Kumar',
    age : 22,
    email : 'sanjeevyaadav28520@gmail.com',
    Array : ["Sanjeev","Amit","Sunil","Rahul"],
    marks : function(){
        var hi=45;
        var eng=56;
        var c=hi+eng;
        return c;
    },
    living :{
        'city' : 'chandigarh',     // Object in a object
        'country' : 'India'

    },
    fullname : function(){
        return this.fname + " " +this.lname;   // Use of this keyword
    }
}
document.write("<strong>First name</strong>&emsp; &rArr; "+a.fname);   //Calling a property of this object
document.write("<br><strong>Last name</strong>&emsp; &rArr; "+a.lname);
document.write("<br><strong>Age</strong>&emsp; &rArr; "+a.age);
document.write("<br><strong>Email Address</strong>&emsp; &rArr; "+a.email);
document.write("<br><strong>Marks</strong>&emsp; &rArr; "+a.marks());    //caling of function
document.write("<br><strong>Array</strong>&emsp; &rArr; "+a.Array[3]);
document.write("<br><strong>Full Name</strong>&emsp; &rArr; "+a.fullname());
document.write("<br><strong>City name</strong>&emsp; &rArr; "+a.living.city+"<br><br>");   // Call an object in a object



// New method to create an Object
document.write("&rArr; &emsp; <strong>Another method to create an object by using new keyword <br><code>var a = new Object();</code></strong><br><br>");

// var person = new Object();
// person.fname='Rahul';
// person.lname ='Pasoriya';
// perrson.age = 22;
// document.write(person.age);



// Array of objects
document.write("&rArr; &emsp; <strong>Array of Object.</code></strong><br>");
var student = [
{name : 'Ram', age : 15},
{name : 'Shyam', age : 22},
{name : 'Sunny', age : 23},
{name : 'Ravinder', age : 23}
]
for(var a =0;a < student.length;a++){
document.write(student[a].name +"&rArr;" +student[a].age+"<br>");
}
document.write("<br>");


// If we want to reassign value to an const array or const object we need to assign value to each property 
// of that const variable 



//For/in loop  (key) word use to get value of a property
document.write("&rArr; &emsp; <strong>for/In loop</strong><br><br>");
var a= {
    fname : 'Sanjeev',
    lname : 'Kumar',
    age : 22,
    email : 'sanjeevyaadav28520@gmail.com',
    Array : ["Sanjeev","Amit","Sunil","Rahul"]
}
document.write("<ol>");
for(var key in a){
document.write("<li>"+key +" : "+a[key] +"</li>" +"<br>");
}
document.write("</ol>");



// Array Map method is will not change the existing array create new array.
document.write("&rArr; &emsp; <strong>Array Map Method</strong><br><br>");
var ary =[2,3,4,5,6,7];
var b=ary.map(function(a){
    return a*10;
})
document.write(" New array &emsp; &emsp; &rArr;&nbsp;&ensp;"+b+"<br>");
