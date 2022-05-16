'use strict';

let userAnswerArr = [];
let score = 0;
let userName = '';
let correctNumber = Math.floor(Math.random() * 9) + 1;

function getUserName() {
  return prompt('Hello! May I please ask your name? ');
}

function questionsUpToFive(index) {
  userAnswerArr.push(prompt(getQuestionOrAnswer(index, 0)));
  if (userAnswerArr[userAnswerArr.length - 1].toLowerCase() === getQuestionOrAnswer(index, 1) ||
    userAnswerArr[userAnswerArr.length - 1].toLowerCase() === getQuestionOrAnswer(index, 2)) {
    score++;
    alert(getCorrectResponse());
  }
  else {
    alert(getWrongResponse());
  }
}

function questionSix(index, guessCount, maxGuess) {
  userAnswerArr.push(prompt(getQuestionOrAnswer(index, 0)));
  if (+userAnswerArr[userAnswerArr.length - 1] === correctNumber) {
    score++;
    alert(`Woweee nice guess, it indeed was ${correctNumber}`);
    return true;
  }
  else if (+userAnswerArr[userAnswerArr.length - 1] < correctNumber) {
    alert(`Sorry but thats too low. ${maxGuess - guessCount} guesses left`);
  }
  else {
    alert(`Sorry but thats too high. ${maxGuess - guessCount} guesses left`);
  }
}


function questionSeven(index, guessCount, maxGuess) {
  userAnswerArr.push(prompt(getQuestionOrAnswer(index, 0)));
  let possibleAnswers = getQuestionOrAnswer(index, 1);
  if (possibleAnswers.includes((userAnswerArr[userAnswerArr.length - 1]).toLowerCase()) === true) {
    score++;
    alert(`WOW! You got it! Nice Job! Here are all the possible answers: ${getQuestionOrAnswer(index, 1)}`);
    return true;
  }
  else {
    alert(`Sorry but thats incorrect. ${maxGuess - guessCount} guesses left`);
    if (maxGuess - guessCount === 0) {
      alert(`Here are all the possible answers: ${getQuestionOrAnswer(index, 1)}.`);
      return;
    }
  }
}

function getCorrectResponse() {
  let responseCorrect = ['Great job you are correct!', 'Nice one! You got it!', 'Woah how did you know that?', 'Superb job!',
    'Nailed it!', 'Fantastic guess!', 'Absolutely Correct.', 'Yes Yes Yes!'];
  return responseCorrect[Math.floor(Math.random() * responseCorrect.length)];
}

function getWrongResponse() {
  let responseWrong = ['Ooooh, so close but incorrect.', 'Sorry, maybe you\'ll get it next time.', 'Nope, not correct.', 'Wrong, but good guess',
    'Dang, almost got it'];
  return responseWrong[Math.floor(Math.random() * responseWrong.length)];
}

function getQuestionOrAnswer(index, subindex) {
  let questionArr = [['Do I live in Washington State? (Yes or No?)', 'y', 'yes'],
    ['Did I serve in the Coast Guard? (Yes or No?)', 'n', 'no'],
    ['Have I ever traveled outside of the United States? (Yes or No?)', 'y', 'yes'],
    ['Am I a fan of the Green Bay Packers? (Yes or No?)', 'y', 'yes'],
    ['Do I own a motorcycle? (Yes or No?)', 'n', 'no'],
    ['Please guess a number I\'m thinking of (1-10). (4 tries) :'],
    ['Which state have I lived in for at least one year? (6 tries, more than 1 correct answer)', ['wisconsin', 'alaska', 'new york', 'washington']]];

  return questionArr[index][subindex];
}

function gameComplete() {
  alert(`Congratulations on completing my little quiz. You got ${score} answers correct.`);
  document.getElementById('userNameLocation').innerHTML = `Welcome ${userName}, Congrats on getting ${score} answers correct. Please feel free to learn more about me below.`;
}

function guessingGame() {
  userName = getUserName();
  for (let i = 0; i < 7; i++) {
    if (i < 5) {
      questionsUpToFive(i);
    }
    if (i === 5) {
      for (let j = 0; j < 4; j++) {
        if(questionSix(i, j, 3)===true){
          break;
        }
      }
    }
    if (i === 6) {
      for (let k = 0; k < 6; k++) {
        if(questionSeven(i, k, 5)===true){
          break;
        }
      }
    }

  }
  gameComplete();
}

guessingGame(); //Let the GAMES BEGIN!!!
