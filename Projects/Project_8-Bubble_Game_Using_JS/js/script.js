
let timer = 10;
let score = 0;
let hitRandomValue=0;
let started = false;

function makeBubble(){
    let clutter = "";
    for(let i=0; i<=159; i++){
        let randomNumber = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${randomNumber}</div>`
    }
    document.querySelector(".panel-bottom").innerHTML = clutter;
}

function runTimer(){
    let timeInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerCountDown").textContent = timer;
        }
        else{
            clearInterval(timeInterval);
            document.querySelector(".panel-bottom").innerHTML = `<h1>Game Over!</h1>`;
            started = false;
        }
    },1000);    
}

function getNewHit(){
    hitRandomValue = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = hitRandomValue;
}

function setScore(){
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

document.querySelector(".panel-bottom")
.addEventListener("click", function(details){
    if(!started){
        runTimer();
        started = true;
    }
    let clickedNumber = Number(details.target.textContent);
    if(clickedNumber===hitRandomValue){
        makeBubble();
        setScore();
        getNewHit();
    }
});


makeBubble();
getNewHit();