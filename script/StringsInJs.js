//Strings in JS

//  A JavaScipt is zore or more character enclosed in quotes Aymbol

// JS Strings are used for storinga  and manipulating
// Use can use single and double quotes
// Strings can be ctreated as premitive From Strings Literals,or as objects, using Stirng() constructor
/*
let myName="Muhammad Usman"
let myName2='Muhammad Usman'
let IdCardName=new String ('Muhammad Usman')

console.log(myName);
console.log(myName2);
console.log(IdCardName);

*/

//   Finding the length of the String
//Srting.Prototype.length
/*
let myName="Muhammad Usman"
console.log(myName.length);
*/
/*
//      Escape Cahracter in js
let anySentence='My name is \'Muhammad Usman\''
let myName="My naame is \"Muhammad Usman\""
console.log(anySentence);
console.log(myName);
*/

//    Finding a String in a String
// String.Prototype.indexOf.[searching value,[,from index]]

//The indexOf() methods Returns the index of the occurence of the specified text in string
/*
let myName='i am Muhammad Usman'
console.log(myName.indexOf('U',13));
*/

// String.Prototype.lastIndexOf.[searching value,[,from index]]

//The indexOf() methods Returns the index of the occurence of the specified text in string else "-1"
/*
let myName='i am Muhammad Usman'
console.log(myName.lastIndexOf('a',3));\
*/

// 2) Serching for a string in a string

//Srting.Prototpye.search()
// The search( ) method searches for a specified value and return the indexof(Position) he specified value
/*
let myName='i am Muhammad Usman'
let Sname=myName.search("Usman")
console.log(Sname);
*/


//   3) Extracting Strings parts
//There are Three methods for Extracting the strings
// slice(start,end)
// subString(start,end)
// subStr(start,length)


// i)the slice()method selects the element starting at the given start argument and,ends at ,does not includes the,given ending argument
//Note: the Original Array will not be chnaged
/*
var str='Apple, Banana, Kiwi,Mango'
// let res=str.slice(0,4)
// let res=str.slice(7,-1)
let res=str.slice(7)
console.log(res);
*/

//  Challange Time

//Display onl 280 characters like   
/*
let myTweet="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nesciunt est laboriosam ipsam porro quaerat dolores, voluptatem voluptas sapiente alias explicabo reiciendis, accusamus tenetur delectus qui, eum odit officia nulla?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nesciunt est laboriosam ipsam porro quaerat dolores"
let actualTweet=myTweet.slice(0,280)
console.log(actualTweet);
console.log(actualTweet.length);
*/

// The Subtring method

// substring and slice are similar but te 'Differece ' is that it cannot accept negative index of array
/*
var str='Apple, Banana, Kiwi,Mango'
let res=str.substring(0,5)
console.log(res);
*/

// The Substr method
//This is similar to substring method but the second perametre is to define the length of the exctraced part
/*
var str='Apple, Banana, Kiwi,Mango'
// let res=str.substr(7,5)
let res=str.substr(-5)
console.log(res);

*/

// 3)  replacing Method in String 
//String.prototype.replace(searchfor,ReplaceWith)
/*
let myName='I am Muhammad usman'
let repalceData=myName.replace('usman',"Usman")
console.log(repalceData);
*/

// Points to Remember
/*
1: The replace( )does not change the string
2: It is caled on and retuns a new string
3: By Default the replace() method replaces only the first match
4 By Default the replace() metod is case sensitive

*/


// Exctracting Stirng character 
//There are thee method for extracting string Character
// i) chartAt(Psition)
// ii) charCodeAt(Position)
// iii) Property access [ ]



//  i) The charAt method 
// The charAt method return the character at the specified Position in Specified Position
/*
let str="Muhammad Usman"
console.log(str.charAt(6));
*/
 
//  ii)The charCodeAt() method
//The charCodeAt() method reruen the uni Code at the specified characer of the string
// The "UniCode" Provides a unique code for Every character it does not matter what the device is 
// An interger b/w(0 to 65535)
/*
let myName="I am Muhammad Usaman"
let UniCode=myName.charCodeAt(0)
console.log(UniCode);
*/

// Chalange Time 

// written the unicode of last character 
/*
let myName='Muhammad usman'
let LastChar=myName.length;
console.log(LastChar);

let unicode=myName.charCodeAt(LastChar-1);
console.log(unicode);
*/


//  3) Property Access
// ECMAScript 5 (2009) allows Property Access [ ] on Strings
/*
let str='ki haal chl aa thk oo na';
console.log(str[0]);
*/


//     "OTHER USEFUL METHODS IN JS"
//  let myName="Muhammad Usman"
//  console.log(myName.toUpperCase());
//  console.log(myName.toLowerCase());

//    Ya Wla nAi hova Mj sa Nxt agy krn ga phly kiya ha skip ho gaya ha

//  let cap="<span style='text-transform: capitalize;' >"+ myName + "</span>"
// myName.style.text-transform=''
//  console.log( cap);
// console.log('"<span style="text-transform:capitalize;">"+"i am usman who is usman whatever"+"</span>"');



//  The concact() Method

/*
let fLine="Muhammad "
let sLine="Usman ";
console.log(fLine.concat(sLine));
console.log(`${fLine}${sLine}`);

*/


// the trim() method
//Trim Method is used to remove the whitespaces around the string
/*
var myName="      Muhammad  Usman!       "
console.log(myName.trim());

*/

// Converting a stirng to array
// A string is converted to an array with the help of split method()
/*
var text='a,b,c,d,e,f'
console.log(text.split(","));
console.log(text.split(" "));
console.log(text.split(" | "));
 */


        //         "              DONE               "