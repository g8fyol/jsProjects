"use strict";
let numDisplay = document.querySelector(".number");
// console.log(numDisplay);
let guessInput = document.querySelector("#guess");
let againBtn = document.querySelector(".again");
let checkBtn = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let body = document.querySelector("body");

//init
let currentScore, randomNumber, guess;
let highScore = 0;
const init = function () {
  currentScore = 20;
  guess = "";
  guessInput.value = guess;
  score.textContent = currentScore;
  highscore.textContent = highScore;
  randomNumber = Math.trunc(Math.random() * 20) + 1; //[0,1) * 20 + 1 = 1 to 20;
  console.log(randomNumber);
  body.style.backgroundColor = "#222";
  console.log(highScore);
};
init();

checkBtn.addEventListener("click", function () {
  // get the guessed number
  guess = guessInput.value;
  console.log(guess);

  if (!guess) {
    // case when guess is not a number
    message.textContent = "Enter a valid Number between 1 and 20 inclusive";
  } else if (guess && typeof Number(guess) !== NaN) {
    let guessed = Number(guess);
    if (guessed >= 1 && guessed <= 20) {
      if (guessed === randomNumber) {
        //if guess is correct
        message.textContent = "Corrrect Number!";
        if (currentScore > highScore) {
          highScore = currentScore;
          highscore.textContent = currentScore;
        }
        body.style.backgroundColor = "rgb(96, 179, 71)";
        numDisplay.textContent = randomNumber;
      }
      if (guessed !== randomNumber) {
        if (currentScore === 1) {
          message.textContent = "you lost the game!";
        } else {
          currentScore--;
          score.textContent = currentScore;
          if (guessed > randomNumber) {
            message.textContent = "Too High!";
          } else if (guessed < randomNumber) {
            message.textContent = "Too Low";
          }
        }
      }
    } else {
      currentScore--;
      score.textContent = currentScore;
      message.textContent = "Enter a valid Number between 1 and 20 inclusive";
    }
  }
});

console.log(againBtn);
againBtn.addEventListener("click", function () {
  //resetting everything
  init();
  numDisplay.textContent = "?";
});
