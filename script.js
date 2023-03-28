// Q1-
let text= document.getElementById("text")
function page() {
    console.log(text.innerHTML);
}

//Q2-
 let h1= document.getElementsByTagName("h1");
 function callMe() {
    console.log(h1[0].innerText);
 }
//  Q3.
let cls = document.getElementsByClassName("box")
function start() {
    console.log(cls[0].innerText);
}
// Q4.
let hel= document.getElementById("world");

function hello() {
    console.log(hel.innerText);
    hel.innerText= "Hello World";
}
// Q5.
let text1=document.getElementById("helloText");
let newText= "Welcome to Elevation academy"
function replace() {
    console.log(text1.innerText);
    text1.innerText= newText;
   
}
// Q6.
let head= document.getElementById("heading");
function change() {
    head.setAttribute('style' , 'color: red');
    
}
// Q7.
let parent= document.querySelector("#parent");
let chg= document.querySelectorAll("#submit");
count=0;
function direction() {
    if(count%2 === 0) {
        parent.setAttribute('style' , 'flex-direction: column');
        count++;
        console.log(count);
    }
    else {
        parent.setAttribute('style' , 'flex-direction: row');
        count++;
        console.log(count);
    }
}
// Q9.
// let timer=document.getElementById("time")
// function dgclock() {

// let time= new Date();
// let hours= time.getHours();
// let mins= time.getMinutes();
// let sec= time.getSeconds();
// let timeZone= ${hours}  :${mins} :${sec};
// timer.innerText= timeZone;
// }

// setInterval( () => {
//     dgclock();
// }, 1000);
