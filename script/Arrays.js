// Arrays in Js

//When we feel to store multiple values in one time in a variable then we use Arrays instead of Variables

//In JS We have Arrays class and Arrays are prototype of this class

// First Element of array is called "lower index" or "lower boundary"
// Last Element of array is called "Upper index" or "Upper boundary"
// Index start from " 0 "
// First element index of array id " 0 "
// Last element index of array id " array length - 1 "

//  1) Triversal in an Array
// Navigate through an array

// if we want to check the last elemt of the array
/*
var myFriend=['Muhammad usman','Ali',"Hassan",'Sheda']
 
document.write(myFriend[myFriend.length-1])
document.write(myFriend.length)

*/

// use for loop for navigation

// using "for in loop " and 'For of loop'
/*
var myFriend=['Muhammad usman','Ali',"Hassan",'Sheda']
for(let elements of myFriend){
    document.write(elements)
}
//  for of loop is used to get the element of arrays  

var myFriend=['Muhammad usman','Ali',"Hassan",'Sheda']
for(let elements in myFriend){
    document.write(elements)
}*/
//  for in loop is used to get the element of arrays

// '"forEach"' loop
/*
var myFriend=['Muhammad usman','Ali',"Hassan",'Sheda']
myFriend.forEach((elements,index,array)=>{
    document.write(`Element of the array ${elements}  and index of the array ${index}${array}</br> `)
})

*/

// 2) Searchimg and filter in array
//    i) Array.prototype.indexOf()
//Retuns the index of serching word ("if word not found then -1")
//it search element in Array from 0th index of
/* 
var myFriend=['Muhammad usman','Ali',"Hassan",'Sheda']

document.write(myFriend.indexOf('Hassan'))*/

//    ii)LastIndeOf in Array Search from back of the array

//opposite to the indexOf
/*
var myFriend=['Muhammad usman','Ali',"Hassan",'Sheda']

document.write(myFriend.lastIndexOf('Sheda'))

*/
//    iii) array.Prototype.Includes()
//Determone the aray whatever conatins a value or not
//gives "True or false"
/*
var myFriend=['Muhammad usman','Ali',"Hassan",'Sheda']

document.write(myFriend.includes('Sheda'))
*/

//     iv) Array.prototype.find()
// arr.find([callback(Elemnt,index,array)][this.arr]){.... statement}
// Problem that it returns only one value
/*
var myFriend=[100,200,300,400,500,600]
var myElement=myFriend.find((eVal)=>{
return eVal<400;
})
document.write(myElement)
*/

//      v) Array.findIndex()
// Return the index of Element in Array if found the Elemnent Else "-1"
/*
var myFriend=[100,200,300,400,500,600]
var myElement=myFriend.findIndex((eVal)=>{
return eVal>1400;
})
document.write(myElement)
*/

//      vi) Array.Prototype.filter()
// Return a new Array cointaing all the Calling Eelemts if the the filtering function is ture else "-1"
/*
var Prices=[100,200,300,400,500,600]
var newprices=Prices.filter((elements,index)=>{
return elements<400
})
document.write(newprices)
// document.write(index)
*/

// 3) How to sort an array
//"sort(method)" in Array converting the array and retruns a sorted array
//Default order is Ascending upon converting the elemnets into strings
//Array .prototype.sort()
/*
let months=["junary","Feb","March","Aprail"]
document.write(months.sort())
*/

// These produces a wrong results for sorting of numbers

// 4) Perform (CRUD) Create Read Update and Delete
//        i)Array.Prototype.Push()
//"Push(method)" add element at the end of the array and Retuns a new lenghth of array
/*
let Animals=["goat","sheep","Cow"]
let type= Animals.push("Chicken","Rabbit")
document.write(Animals)
document.write(type)
*/

//        ii)Array.prototype.unshift()
//"unshift(method)" add element at the Start of the array and Retuns a new lenghth of array
/*
let Animals=["goat","sheep","Cow"]
let type= Animals.unshift("Chicken","Rabbit")
document.write(Animals)
document.write(type)

//2nd Example

var mynumber=[1,2,3,5]
mynumber.unshift(4,6)
document.write(mynumber)
*/

//        iii)Array.Protype.pop()
//pop(method)" Remove element at the "end" of the array and Changes the length of array lenghth of array
//And return the removed elemnet
/*
let plants=["brocilli","cauliflower","kale","Cabbage","Carrot","tomato"]
document.write(plants+"</br>")
var newPlant= plants.pop();
document.write(newPlant+"</br>")
document.write(plants+"</br>")
*/

//       iv)Array.Prototype.shift()
//"Shift(method)" Remove element at the "start" of the array and Changes the length of array lenghth of array
//And return the removed elemnet
/*
let plants=["brocilli","cauliflower","kale","Cabbage","Carrot","tomato"]
document.write(plants+"</br>")
var newPlant= plants.shift();
document.write(newPlant+"</br>")
document.write(plants+"</br>")
*/

// Array Challange time
//Splice method in js
//splice(starting index number.Deleting index,adding index)

// Add dec at the end of array
/*
const months=["junary","Feb","march","Aprail"] 

let addMonth=months.splice(5,0,"Dec")
// for last element "array;length-1"
document.write(months)

// Retuning the value of the array

console.log(addMonth);

*/
//Update march to March
/*const months=["junary","Feb","march","Aprail"] 

let updateMonth=months.splice(2,2,"March")

console.log(months);

*/

// chnage march to june
/*
const months=["junary","Feb","march","Aprail"] 
let indexofMonth=months.indexOf("march")
document.write(months+"</br>");
if (indexofMonth!=-1) {    
let updateMonth=months.splice(indexofMonth,1,"June")
document.write(months+"</br>");
console.log(months);
}
else{
    document.write("The Updating String is not Found")
}

// Deleting June 
const month=["junary","Feb","march","Aprail"] 
let indexofMonth1=month.indexOf("march")
// document.write(months);
if (indexofMonth1!=-1) {    
let updateMonth=month.splice(indexofMonth1,1)
document.write(month+"</br>");
console.log(month);
}
else{
    document.write("The Updating String is not Found")
}
*/

// 5) Map() and Reduce methods

//let newarray=arr.map(callback(curentValue[, index,[,array]])){
//retrun element for newarray,after executing something
//}[,this.argument]
//Return a new array containing the results of caling a funcion on every elment in array

/*
let array=[1,2,5,7,4,9,10,24]

let newarr=array.map((element,index,arr)=>{
    return element< 9
})
document.write(array+"</br>")
document.write(newarr)
*/

/*
let array=[1,2,5,7,4,9,10,24]

let newarr=array.map((element,index,arr)=>{
    return`index no${index} of element ${element} of array ${arr}</br>`
})
document.write(array+"</br>")
document.write(newarr+"</br>")
*/

//It retuns a new array without mutating the original array
// Difference b/w forEach and map

//map returns a new array but forEach method returns a undefined
//map( )method is chainable w attach other method also but forEach is not becase it reruns undefine


// Challange time 

// find square root of elemnets of array 
/*
let array=[25,16,36,49,64,81,100]
let arr=array.map((element)=>{
    return Math.sqrt(element)
})
document.write(arr)

*/

//Multiplaying by 2 to every element of array
/*
let array=[2,3,4,6,7,4,9,31,22,12,13];

let multi=array.map((element)=>{
    return element*2;
}).filter((element)=>{
    return element >10;
})

document.write(multi)
*/

// "Reduce Method "

//Flatten an array means convert the 3D and  2D array into single dimention

//The Reduce Method executes a reducer function on each providing function 
//Resulting in single output value

//reducer takes four arguments
//Accumulator
//cuurent value
//index number
//Source Array
/*
let array=[2,4,6,3]
let arr=array.reduce((acumulator,element,index)=>{
    return acumulator+=element;
})

document.write(arr);
let array=[2,4,6,3]
let arr=array.reduce((acumulator,element,index)=>{
    return acumulator+=element;
},12)

document.write(arr);
*/

/*
let array=[16,36,25,49,64,81,100];
debugger;
let arr=array.map((element)=> Math.sqrt(element)).filter((element)=>element>3).filter((element)=>element*6).reduce((accumulator,element)=>accumulator+=element)

document.write(arr)*/


// reduce 2D array 
