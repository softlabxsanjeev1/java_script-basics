document.write("<h1>Multidimensional Array</h1>");
var ary =[
    ["Harry",18,"Male","B.com"],
    ["Sunny",19,"Male","BCA"],
    ["Sanjeev",18,"Male","BCA"]
];
document.write("<table border='1px' cellspacing="0">");
for(var a =0;a<length.a;a++){
    document.write("<tr>");
    for(var b=0;b<4;b++){
        document.write("<td>"+ary[a][b]+"</td>");
 }
 document.write("</tr>");
}
document.write("</table>");
