/*5               +           20 
^               ^           ^
|               |           |
operaator     operand     operaator*/

// There are Six Type of Operators in js 
/*
1)Assignment  ( = )
Assign the value to the right side 

var x=5;
var y=5;
console.log(x=y);

*/
/*
2)Arthematic 

these takes two numerical values and return a single value usning operand

console.log(3+6);
console.log(4-5);
console.log(4/5);
console.log(4*5);
console.log(4%5);



icrement and decrement operator
  
post increment 
x++; 
pre increment 
++x;
post deccrement 
x--;
pre increment 
--x;
*/


// 3)comparision


// comparision operaor compare its operand and return the values depend on the comparision is true or flase 
/*Equal (==)
not equal(!=)
Greater then(>)
Less Then(<)*/

// 4)logiacal


/* Typically used with boolean values 
and also return a boolean values
i)logical AND(&&) Logical conjuction
 operand is true if and only if when all operators are ture
ii)logical OR (||) Logical Disjunction
true when one or more from all opertors are ture
iii) Logical Not ( ! ) complement or negation
take truth to falisty and vice vera

*/

// 5)String Concatination
/*
Stirng concationation is (+) used to conctinates two strings
returning a single string of the union of two strings
*/

// 6)conditional 



// challange 

// 3**3
// console.log(3**3); 3*3*3

// 10**-1
// console.log(10**-1); 1/10


//  Swap Two Numbers 
/*
var a=8;
var b=10;
console.log("The Value of a Before Swaping"+a);
console.log("The Value of b Before Swaping"+b);

//using third variable
var c;

c=b;
b=a;a=c;
console.log("The Value of a After Swaping"+a);
console.log("The Value of b After Swaping"+b);
*/
//without using third Variable
/*
a=a+b;
b=a-b;
a=a-b;
console.log("The Value of a After Swaping"+a);
console.log("The Value of b After Swaping"+b);


a^b;
b^a;
console.log("The Value of b After Swaping"+b);
console.log("The Value of a After Swaping"+a);
*/

// find word 

function input1(){
    var input=prompt("enter ht").value;
var str=["usman","Ali","Khan"]

for(var i=0;i<str.length;i++){

    str1=str[i].toLowerCase();
}

// var input=input.toLowerCase();

findWord=str1.indexOf(input);
console.log(findWord)
}

input1();