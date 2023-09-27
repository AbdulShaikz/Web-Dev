const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const body = document.querySelector('.container');

let intervalId;

function getRandomHexColor() {
    const color = "0123456789ABCDEF";
    let hexColor = "#";

    for (let index = 0; index <= 5; index++) {
        let randomNumber = Math.floor(Math.random() * 16);
        hexColor += color[randomNumber];
    }
    // console.log(hexColor);
    return hexColor;
}

function changeBackground(){
    body.style.backgroundColor = getRandomHexColor();
}

function createButtonClickHandler(input){
    return function(){
        if(input === 'start' && !intervalId){
            intervalId = setInterval(changeBackground, 1000)
        }else if(input === 'stop' && intervalId!==null){
            clearInterval(intervalId);
            intervalId = null;
        }
    }
}

// Create closures for each button
const startButtonClickHandler = createButtonClickHandler('start');
const stopButtonClickHandler = createButtonClickHandler('stop');

// Add event listeners
startButton.addEventListener('click', startButtonClickHandler);
stopButton.addEventListener('click', stopButtonClickHandler);

//This is not the optimized code, i have written code this way to explore the concpet of closure