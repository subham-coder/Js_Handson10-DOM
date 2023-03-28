// 10.
let body =document.querySelector("body");
let inputNumber= document.querySelector("#box").value;
let randomNumber= Math.floor(Math.random()*100);
let guessText= document.querySelector("#guess");
let checkbutton= document.querySelector("#check");
let qnumber= document.querySelector(".mark");
let chance= document.querySelector("#chance")
let hgscore= document.querySelector("#hgscore");
let count=100;

function checkMe() {
   if(inputNumber>randomNumber) {
     guessText.innerText="Guess is High";
     count--;
     change.innerText=count;
    }
    else if (inputNumber<randomNumber) {
        guessText.innerText="Guess is Low"
        count--;
        change.innerText=count;
    }
    else {
        guessText.innerText="🤩🤩 Correct Guess You Won..! 🤩🤩";
        count--;
        qnumber.innerText=randomNumber;
        hgscore.innerText=count;
        body.setAttribute("style", "background-color:green");

    }
}
let replay=document.querySelector("#replay");
function reload() {
    replay.setAttribute("style" , "background-color:grey");
}