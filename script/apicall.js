let container=document.querySelector('#container');

const request=new XMLHttpRequest();
request.open('GET',"https://rest-countries-api-app.herokuapp.com/detail/PAK")
request.send();

request.addEventListener('load',()=>{
    console.log("https://rest-countries-api-app.herokuapp.com/detail/PAK");
})