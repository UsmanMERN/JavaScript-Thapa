// Modren JS

//1) Let VS const VS Var 



// var => function scope 
// let and const => block Scope 


// 3)  Template litterals
//  JavaScript Programming to print the table of the given number
/*
let input=+prompt('Enter the the Number of Table')

for(var i=1;i<=10;i++){
    document.write(`${input} * ${i} = ${input*i}`+"</br>")
}
*/

// 3) Default Arguments
// default parameters of function allow the named paramneters to initlizes
//  default values if no value or undefine is passed
/*
 function mult(a,b=5){
    return a*b
}
document.write(mult(4))
*/

// 4) Fat Arrow Functions

//Normal Function 
/*
function sum(){
    var a=4;
    var b=10;
    // let sum=a+b;
    return ` The Sum of A and B is ${a+b}`;
   
}
document.write(sum())
*/

// Fat Arrow Function functon
/*
let sum=()=>{
    var a=4;
    var b=10;
    // let sum=a+b;
    return ` The Sum of A and B is ${a+b}`;
    
}

document.write(sum()) */
/*
let sum=()=>`The Sum of Two numbers ${(a=6)+(b=10)}`
document.write(sum()) 
*/