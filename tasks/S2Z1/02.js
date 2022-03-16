/* Write a guessing game where the user must guess a secret number. 
After every guess the program tells the user whether their number was too large or too small. 
At the end the number of tries needed should be printed. 
It counts only as one try if they input the same number multiple times consecutively. Range 1-100.*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let currentRange = [1, 100];
let userGuesses = [];
const secretNumber = getRandomInt(1, 101);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
(function ask() {
  rl.question(`Guess a number in range from ${currentRange[0]} to ${currentRange[1]}: `, function (answer) {
    console.log(`You guessed: ${answer}`);
    checkAnswer(answer);
  });
})();
function checkAnswer(num) {
  if (userGuesses.includes(num)) {
    console.log(`You already tried this number, try again.`);
    ask();
  } else if (num < currentRange[0] || num > currentRange[1]) {
    console.log(`Your guess is not in range, try again.`);
    ask();
  } else if (num == secretNumber) {
    userGuesses.push(num);
    console.log(`YES! That's it! It was your try number ${userGuesses.length}.`);
    rl.close();
  } else if (num < secretNumber) {
    userGuesses.push(num);
    console.log("Higher");
    currentRange[0] = Number(num) + 1;
    ask();
  } else if (num > secretNumber) {
    userGuesses.push(num);
    console.log("Lower");
    currentRange[1] = Number(num) - 1;
    ask();
  }
}

/* to run, type in teminal:
node 02.js
*/
