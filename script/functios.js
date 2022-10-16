// 1) what is function 
//A Js Function is a block of code to perform a specific task

// function defination 

//Before using a Function we need to define the function
//A function defination is also called functinal declaration or function statement
//consists of function keyword ,followed by
//The name of function 
//The list of parameters enclosed in a paranthesises(..,...,...) and sperated by comas
//The JS statement that defines the function,enclosed in curly braces {...}
/*
function sum() {
    var a=5;
    var b=10;
    var total=a+b;
}*/

// 2) function call 
//Definig a function does not means execution a function
// A JS function is executed when someone invoke it (Call it)
/*
function sum() {
    var a=5;
    var b=10;
    var total=a+b;
    document.write(total)

}
sum(); 
*/


//4) Differece b/w Function parameter and function arguments 
// function parametrers are the names list to pass duing the function defination
//But Function arguments are the list of real values passes to functions
/*
function sum(a,b){
    var total =a+b;
    document.write(total)
}
sum(10,20) 
sum(10,43)
*/

//5) why function? on register


//6) function Expression 

//function Expression simply means
//create a function and change it into variables
/*
function sum(a,b){
    var total =a+b;
    document.write(total)
}
var Expression= sum(10,20);
Expression;
*/

//7) Return Keyword

//When Js Function reaches return it is stopped Executing
//Function often compute a return value
//the return value is "Returned "back to the "Caller"
/*

function sum(a,b){
    var total =a+b;
    return total
}
document.write(sum(10,20))
*/


//Anonymous function 

//A function is similar to and have same syntax 
// as function  one can defined named
//function expression (Whrere the name of expression might be used in call stack for example
// or "Anonymous " function expressions