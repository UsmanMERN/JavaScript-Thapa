//    OOP in JavaScript

//      What is Object Literals

// Object Literal are the simple key:values Pair Data Structure
// Storing Variables and function in a object Togeatrher in container
//  We Can Refer This is as Objects

// How to Creae Objects

// 1st way
/*
let myData={
    myName:'Usman',
    myAge:26,
    getData:function(){
        console.log(`My Name is ${myData.myName} and my Age is ${myData.myAge}`);
    }
}
console.log(myData.myName);
console.log(myData.myAge);
myData.getData()
*/

// in the es6 We do not need to Write function 
/*
let myData={
    myName:'Usman',
    myAge:26,
    getData(){
        console.log(`My Name is ${myData.myName} and my Age is ${myData.myAge}`);
    }
}
console.log(myData.myName);
console.log(myData.myAge);
myData.getData()
*/
// What if we want Object in an Object As an Value
/*
let myData={
    myName:{
        myRealName: 'Muhammad Usman',
        myRealAge: 19,
    },
    myAge:26,
    getData:function(){
        console.log(`My Name is ${myData.myName} and my Age is ${myData.myAge}`);
    }
}
console.log(myData.myName);
console.log(myData.myAge);
myData.getData()
console.log(myData.myName.myRealAge);
console.log(myData.myName.myRealName);

*/


//  What is This Object

//The Defination of 'This ' is that is contain the Current context
//The This Object Conatian Different Values Depend On Where it sis Placed

// For Example (1)
// console.log(this);
//in This the current Context of the this Object is a window Global Object

//For Example (2)
/*
function myame(){
    console.log(this);
}
myame();
*/

//Example (3)
/*
var myNames='Muhammad Usman'
function myName(){
    console.log(this.myNames);
}
myName();
*/

// Example (4)
/*
var obj={
    myAge:19,
    call(){
        console.log(this.myAge);
    }
}
obj.call();
*/

//Example (5)
// this Object will not work arrow Function 
/*
var obj={
    myAge:19,
    call:()=>{
        console.log(this);
    }
}
obj.call();

*/
/*
var BioData={
     myrealData :{
MyName:'Usman',
MyWork:'Full Time Wela'
     },
     getData(){
        console.log(`My Name is ${this.myrealData.MyName} and What i am doing ${this.myrealData.MyWork}`);
     }
}
BioData.getData();
*/


// Destructurinh in ES6



//Destructuring in Array
// /.Before
/*
let myBioData=['Usman','Student',19]

let myName=myBioData[0];
let myWork=myBioData[1]
let myAge=myBioData[2]

console.log(myName);
*/
// / After 
/*
const myBioData=['Muhammad','Usman',19];

let[myFName,mySName,myAge]=myBioData;
console.log(myFName);

*/


// Destructing in Objects

// Before
/*
let myData={
    myFName:'Muhammad',
    mySName:'Usman',
    myAge:19
}
let myFname=myData.myFName;
let myage=myData.myAge;
console.log(myFname);
console.log(myage);
*/

//  After
/*
let myData={
    myFName:'Muhammad',
    mySName:'Usman',
    myAge:19
}
let{myFName,mySName,myAge}=myData;
console.log(myFName);
console.log(mySName);
console.log(myAge);
*/



///     Object Properties

// we can know use Dynamic properties 
/*
let myName='Muhammad Usman'
let myData={
    [myName]:'Hello How are you ?',
    19: 'is my Age' 
}
console.log(myData);
*/

// if key and value both are same then no need to write key and value 
/*
let myNAme='Muhammad Usman'
let myAge=19;
let myData={
    myAge,
    myNAme
}
console.log(myData);
*/



//          Spread Array 
/*
let colors=['red','Green','Yollow','grey','pink']
let myFvrtColors=[...colors,'Black','White']
console.log(myFvrtColors);
*/


//  ES7 Functions 2016

// 1):array include
// 2): ** Expotentation Operator

//  ES8 Features 2017

// 1): String Padding
// 2): Object.Values()
// 3): Object.enteries()
/*
let myName='Usman'
console.log(myName.padStart(10));
console.log(myName.padEnd(10));
*/

// Object.values()
/*
let myData={
    myName:'Usman',
    myAge:19
}
let sData={...myData}
// console.log(Object.values(myData));
console.log(Object.entries(myData));
// console.log(myData);
// console.log(sData);
*/



// ES 2019 


/*
let myData={
    myName:'Usman',
    myAge:19
}
let sData={...myData}
*/

// Flatten An Array 
/*
let arr=[
    ['zone-1','Zone-2'],
    ['zone-3','Zone-4'],
    ['zone-5',['Zone-6','zone-7']]
]

// Firstly we use reduce method but after ES 2019  
console.log(arr.flat(Infinity));
*/

//    Object.fromenteries()

/*
let myData={
    myName:'Usman',
    myAge:19
}
let arr=Object.entries(myData);
console.log(Object.fromEntries(arr));

*/



// ES 2020 

//#1 BigInt
/*
let oldNum=Number.MAX_SAFE_INTEGER;
// console.log(oldNum);

console.log(9007199254740991n+19n);
*/
/*
const foo=null ?? 'Ja Ja Tur Ja'
console.log(foo);
*/

// ES 2014 
// 'use strict'
// x='Usman'
// console.log(x);

// 'use strict'
// let x='Usman'
// console.log(x);
