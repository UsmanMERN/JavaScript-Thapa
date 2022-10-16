/*// if ..... else 

// the if only excute the condition only if the specifued condition is true 
// If the condition iis false then another statement is excuted

// syntax 

if (condition) {
    
}
else{

}*/

// Challange time 
/*
var year=+prompt("Enter the Year")
if(year%4==0){
    if(year%100===0){
if(year%400===0){

    document.write("This is leap Year");
}else{

    document.write("This is Not leap Year");
}
    }
    else{

        document.write("This is leap Year");
    }
}
else{
    document.write("This is Not leap Year");
    
} */

 

// Condtional ternary operators 

// Syntax
// variable name=condition ? value1:value2;
/*
var age =+prompt("Enter your age")
document.write((age>=18)?"you can vote ":"You can't Vote")

*/


// Switch case 

//Evulates a Value, MAtching an experssion to the case claues and Executes an statement Associates with that case
/*
var area='Rectangle';
var l=5,pi=3.14,b=6,r=3;

switch (area) {
    case 'circle':
    document.write("Area of Circle is" + pi*r**2)
        break;
    case 'triangle':
    document.write("Area of triangle is" + (l*b)/2)
        break;
    case 'Rectangle':
    document.write("Area of Rectangle is" + l*b)
        break;

    default:
        document.write("Chala ja bhosriwla")
        break;
}
*/

// while loop 

// While loop statement create a loop taht executes a specified statemnt for a specific time as long as test statemnt is true 
/*
while (i<10) {
    document.write( i +"<br>")
    i++;
}
*/
// do while loop 

/*
var i=0;

do{
    document.write( i +"<br>")
    i++;
}while(i<10)

*/


// For loop 

// syntax 
/*
for (initilizaor; condition; iterator) {
    statement code to be executed
    
}*/

// Challange time 

// tables 

var input=+prompt("Enter the the table  number")


for(var i=1;i<=10;i++){
    document.write(input +" X " + i+" = "+i*input+"</br>" )
}