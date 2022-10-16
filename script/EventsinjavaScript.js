//           JavaScript Events
//Events in JS are things that Happens to the HTML

//   HTML Events 
//These can be something that happens to the Browser or can a user 'do'


// Section 1) ways of Writing Events in js 

// 1: Using Alert 
// 2: By Calling a Function
// 3: Using inline Events (Onclick=...()etc)
// 4: Using EventListner 
/*
var call=()=>{
    alert('Hi! I am Usman Whatever Am I')
}

let thirdyaw=document.getElementById('event1');
thirdyaw.onclick=function (){
    alert(`Hi! I am Usman Whatever Am I`)
}

let fourthWay=document.getElementById('event');
fourthWay.addEventListener('click',()=>{
    alert(`Hi! I am Usman Whatever Am I`)

})
*/


// Section 2) What is Event Objects
// Event Objects are the Parent Objects of event objects
// For Example
// MouseEvent,FocusEvent,KeyboardEvent Etc 


// Section 3) MouseEvents

//Events that occurs when the mouse intract with the HTML documnets Belogs to the MouseEvent Objects

/*
let eventCheck=()=>{
    alert(`Hi! I am Usman Whatever Am I`)
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}
let fourthWay=document.getElementById('event');
fourthWay.addEventListener('click',eventCheck)
*/

// var bg=document.querySelector('.myP');
/*
function mDown(){
    document.getElementById('myP').style.color='yellow';
}
function mUp(){
    document.getElementById('myP').style.color="#fff";
}
*/
/*
var satement=()=>{
    var date=new Date()
    var hour=date.getDay();
switch(hour){
    case 1:
alert("monday")
case 4:
    alert("HLO")
}
}

document.querySelector('#click').addEventListener("click",satement);
*/
/*
const mBox=document.getElementById('box');
mBox.addEventListener('mouseenter',()=>{
   mBox.style.backgroundColor='black'
   console.log("Enetred ");
});
mBox.addEventListener('mouseleave',()=>{
    mBox.style.backgroundColor='Yellow'
    console.log("Leave Mouse");
 });
 */
/*
 var keypress=()=>{
    document.querySelector("#myText").innerHTML=`This is key ${event.key} this is code ${event.code}`
 }
 var kDown=()=>{
     document.querySelector("#myText").innerHTML=`This is key Down`
    }
    var kUp=()=>{
       document.querySelector("#myText").innerHTML=`This is key UP`
    }
*/
/*
var slectBtn=()=>{
var inputName=document.querySelector('#name').value;
var inputBtn=document.querySelector('#selectBox').value;
console.log('hi');
document.getElementById('output').innerHTML=`Mr ${inputName} you selected ${inputBtn} Flavouire`
}
*/

/*    Conclusion    */
//  ?The addEventlistner cannot overWrite the Existing Event 
//  ?The Onclick can overWrite the Existing Event 

