//What is Event Propagation

//The Event Propagation mode determines the Order in Which the Elemnts Recieve the events

// types
//#1) The Capture Phase
//Going from window to Event Target Phase (Top-->Bottom)
//#2) The Target Phase
//It is the Target Phase
//#3) the Bubble Phase
//From vent Target to the PArent bak to Window    (Bottom--->Top)
/*
var parent=document.querySelector('.main');
var child=document.querySelector('.child');

var Propagation=()=>{
    alert('parent is clicked')
}
var Bubble=()=>{
    alert('child is called')
}

parent.addEventListener('click',Propagation,true)
child.addEventListener('click',Bubble,true)
*/




// Higher Order Function
//The Function in which other Function Also called As an Argument (Accept the other function as an argument )

//Call Back Function 
//The Functoins those are Passed As an Argument from other functions




// 1:) Hosting in JavaScript
//We have Creation and Execution Phase in JavaScript
//Hosting in JavScript is mechanism in which the Variables and Function Declaration in are
//Move to the top of the phase of Execution

// for Example
/*
console.log(myName);
let myName;
myName='Usman'
*/


//  2): What is Scope Chain and Lexical Scoping in JavaScript

//The Scope Chain is used to resolve the variables name in js
// The Scope Chain is lexically defined Which Means we can see
//What the scope chain will be after looking the Code

//At the top we have global Scope ,Which is window object in the Browser

//Lexical scoping means the inner function now can also access thier 
//Parents Objects But the vice Versa is not true

// for Example 
/*
var a='Hi! I am Muhammad usman'
var fun1=()=>{
    var b='How Are You ?'
    var fun2=()=>{
        var c='What are you Doing Now-a-Day'
        console.log(a+b+c);
    }
    fun2();
}
fun1()
*/


// What is closures in Js JavaScript

//A closure is a Combination of a functioned togeaher with reference s
//to its sorrunding State

//In other Word, closure gives you the access the 
//Outer function scope from the inner funtion scope

/*
let outerFun=(a)=>{
    let b=10;
    let innerFun=()=>{
        let sum=a+b
        console.log(`The Sum of Two Numbers ${sum}`);
    }
    return innerFun

}
let checkCluser=outerFun(8);
console.dir(checkCluser)
// it same like lexical scoping 
*/




//       Asychronous in JavaScript

// synchronous JavaScript Programm 
// Example 
/*
var fun2=()=>{
    console.log(`This is function 2`);
}
var fun1=()=>{
    console.log(`This is Function 1`);
    fun2()
    console.log(`Function 1 Calling Again`);
}
fun1();
*/

// Asynchronous JavaScript programm
/*
var fun2=()=>{
setTimeout(()=>{
    console.log(`This is function 2`);
},2000)
}
var fun1=()=>{
    console.log(`This is Function 1`);
    fun2()
    console.log(`Function 1 Calling Again`);
}
fun1();
*/

// // What is Event looop in JS


// What is function currying
// Problem 
// sum (3)(5)(9) 
/*
function sum(num1){
    return(num2)=>{
        return(num3)=>{
            console.log(num1+num2+num3);
        }
    }
}
sum(9)(5)(6)
*/
/*
let sum=(num1)=>
    (num2)=>(num3)=>console.log(num1+num2+num3);
sum(3)(5)(9);
*/


// Call Back Hell 




// Bonus JSON 

// JSON.stringify Turns the JavaScript Object into json text and stores the json text in a string etc.

let myData={
    key:'this is 1st',
    key1:'This is Two'
}
var Data_as_String= JSON.stringify(myData);
console.log(Data_as_String);
console.log(typeof(Data_as_String));
var data_as_after= JSON.parse(myData);
console.log(data_as_after);
console.log(typeof(data_as_after));