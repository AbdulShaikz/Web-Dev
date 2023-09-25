let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('.guessSubmit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let guessCount = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    //console.log(guess);
    
    validateGuess(guess);
  });
}
function validateGuess(guess){
    if(guess==="" || isNaN(guess)){
        alert("Please enter a valid number!");
    }else if(guess<1){
        alert("Please enter a number higher than 1");
    }else if(guess>100){
        alert("Please enter a number lower than 100");
    }else{
        previousGuess.push(guess);
        if(guessCount<10){
            update(guess);
            checkGuess(guess);
        }else{
            update(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`,"yellow");
            endGame();
        }
    }
}

function update(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    guessCount++;
    remaining.innerHTML = `${11-guessCount}`;
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("You guessed it right!");
        endGame();
    }else if(guess<randomNumber){
        displayMessage("Number is too LOW!!","red");
    }else if(guess>randomNumber){
        displayMessage("Number is too HIGH!!","red");
    }
}

function displayMessage(message, color="green"){
    lowOrHigh.innerHTML = `${message}`;
    lowOrHigh.style.color = `${color}`;
}

function endGame(){
    previousGuess = [];
    guessCount = 1;
    userInput.setAttribute('disabled','');
    // console.log(p);
    // console.log(p.classList);
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      previousGuess = [];
      guessCount = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - guessCount} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      userInput.value='';
      displayMessage('');  
      playGame = true;
    });
  }