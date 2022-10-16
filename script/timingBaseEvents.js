// JavaScript Timing Events

//the window objects allows he code executiomn after a specific timeinterval
//These Time interval are Caled Timmming Events

// Two keyWords in javaScript
/*
setTimeout(() => {    
}, timeout);

//The Programm Executes after a Specific Time
setInterval(() => {
}, interval);

//The Programm Repeat Execution after a Specific Time
*/

// There are Four Ways
// 1)setTimeout()
// 2)setInterval()
// 3)clearTimeout()
// 4)clearInterval()
/*
var myName=document.querySelector('#myName');
var button=document.querySelector('#Btn');
var output=()=>{
    myName.innerHTML='Loading.....!'
    setTimeout(() => {
    myName.innerHTML='Usman'
    }, 3000);
}
button.addEventListener('click',output)
*/

//     setinterval
/*
var stopNum = document.querySelector("#myName");
var button = document.querySelector("#Btn");
var button1 = document.querySelector("#Btn1");
var stopInterval;
var num = 0;
var output = () => {
  stopNum.innerHTML = "Loading.....!";
  stopInterval=setInterval(() => {
    stopNum.innerHTML = `${num}`;
    num++;
  }, 2000);
};
button1.addEventListener('click',()=>{
  clearInterval(stopInterval);
  console.log('Stopped');
})
button.addEventListener("click", output);

*/
