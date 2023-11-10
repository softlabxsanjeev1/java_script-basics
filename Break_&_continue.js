document.write("<h1>Continue Statement</h1>")
for(var a=0;a<=10;a++){
    if(a==3){
        document.write("Hey : "+a+"<br>");
        continue;
    }
    document.write("Number : "+a);
}

document.write("<h1>Break Statement</h1>")
for(var a=0;a<=10;a++){
    if(a==3){
        document.write("Hey : "+a+"<br>");
        break;
    }
    document.write("Number : "+a+"<br>");
}