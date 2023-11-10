var h =prompt("Enter Hindi marks");
var e =prompt("Enter your English marks"); 
var m =prompt("Enter maths marks");
var tm =prompt("Enter total marks");
document.write("<b>Hindi = </b>"+h+"<br>");
document.write("<b>English = </b>"+e+"<br>");
document.write("<b>Maths = </b>"+m+"<br>");
function Sum(m,h,e){
    var s=m+h+e;
    return s;
}
function percentage(tt){
    var per= ((tt/tm)*100);
    document.write("<b>Percentage = </b>"+per);

}
var total =Sum(m,h,e);
percentage(total);//call percentage function
// function Sum(){
//     var s=maths+hindi+english;
//     return(s);
// }
// function percrntage(tt){
//     var per=(tt*300)/100;
//     document.write("<b>Percentage = </b>"+per);

// }
// var total =sum(40,50,60);
// percentage(total);//call percentage function