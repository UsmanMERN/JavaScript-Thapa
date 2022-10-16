//      "Date and Time in JavaScript"
//Date object Contains a number that represents the miliseconds since 1 Jaunary 1970 UTC-

//  Creatring the date object
//There are Four Ways to create the new date objects 

//   new Date()
// new Date(years,months,dats, hours,minutes,seconds,miliseconds)
//It takes 7(Seven)Arguments

// new Date()
//Date objects are created with the new Date( ) constructor
/*
let cruentDate=new Date()
console.log(cruentDate);
console.log(new Date()) ;
console.log(new Date().toLocaleString()) ;
console.log(new Date().toString()) ;

*/

// Date.now()
// return the Numeric value of corresponding to the Current time the number of the miliseconds elpse the since jaunary 1,1970

// console.log(Date.now());
// 7(Seven)Arguments years,months,dats, hours,minutes,seconds,miliseconds (in order)
// Note: JavaScript counts months from 0 jaunary to 11 December
/*
let d=new Date(2022,8,9, 19,19,19,19)
console.log(d.toLocaleString());
*/

// ?Date(String) Creates a new object from a date string
/*
let D=new Date("June 15,2022 19:28:12")

// console.log(D);
console.log(D.toLocaleString());
*/

// new Date(milisecons)
/*
let msec=Date.now()
let miliSec=new Date(msec)
// console.log(miliSec);
console.log(miliSec.toLocaleString());
*/

// Date Methods
//    How to get 'individualy Date'
/*
let crntDate=new Date()

console.log(crntDate.toLocaleString());
console.log(crntDate.getFullYear());
console.log(crntDate.getDate());
console.log(crntDate.getDay());
console.log(crntDate.getDay());
console.log(crntDate.getMonth());
*/

// how to set the individual date 

/*
let crnttime=new Date()
console.log(crnttime.getTime());
console.log(crnttime.getHours());
console.log(crnttime.getMinutes());
console.log(crnttime.getSeconds());
console.log(crnttime.getMilliseconds());

*/

// how to set time individually
/*
let crnttime=new Date();
console.log(crnttime.setHours(5));
console.log(crnttime.setMinutes(4));
console.log(crnttime.setSeconds(5));
console.log(crnttime.setMilliseconds(6));
*/

// button 
/*
function btun(){
    let d=new Date();
     d.setHours(6)
     console.log(d.setHours(6));
    document.getElementById("Demo").innerHTML=d;
}
*/

(function(){
    setTimeout(()=>{
        var d=new Date().toLocaleTimeString();
        document.getElementById("Demo").innerHTML=d;
        
        var d=new Date().toLocaleDateString();
        document.getElementById("Demo1").innerHTML=d;
        console.log(d);
    },1000)
})();


//Practice time 
//If We Need Only time 
/*
let e=new Date.toLocaleTimeString()

//If We Need Only date
let d=new Date.toLocaleDateString()
//If We Need both
let f=new Date.tolocaleStirng()
*/
