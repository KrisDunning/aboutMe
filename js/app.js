'use strict';

let responseCorrect = ['Great job you are correct!', 'Nice one! You got it!', 'Woah how did you know that?', 'Superb job!',
  'Nailed it!', 'Fantastic guess!', 'Absolutely Correct.', 'Yes Yes Yes!'];

let responseWrong = ['Ooooh, so close but incorrect.', 'Sorry, maybe you\'ll get it next time.', 'Nope, not correct.', 'Wrong, but good guess',
  'Dang, almost got it'];

let questionArr = [['Do I live in Washington State? (Yes or No?)', 'y', 'yes'],
  ['Did I serve in the Coast Guard? (Yes or No?)', 'n', 'no'],
  ['Have I ever traveled outside of the United States? (Yes or No?)', 'y', 'yes'],
  ['Am I a fan of the Green Bay Packers? (Yes or No?)', 'y', 'yes'],
  ['Do I own a motorcycle? (Yes or No?)', 'n', 'no'],
  ['Please guess a number I\'m thinking of (1-10). (4 tries) :', Math.floor(Math.random() * 9) + 1],
  'Which state have I lived in for at least one year? (6 tries, more than 1 correct answer)'];

let questionSevenAnswerArr = ['wisconsin', 'alaska', 'new york', 'washington'];
let userAnswerArr = [];

function guessingGame(){
  let score = 0;
  console.log(questionArr[5][1].toString()); // console log correct random number for testing

  let userName = prompt('Hello! May I please ask your name? ');

  for (let i = 0; i < questionArr.length; i++) {
    if (i === questionArr.length - 1) //Question 7: multiple correct answer question i=6
    {
      for (let k = 0; k < 6; k++) {
        userAnswerArr.push(prompt(questionArr[i]));
        for (let z = 0; z < questionSevenAnswerArr.length; z++) {
          if (userAnswerArr[userAnswerArr.length - 1].toLowerCase() === questionSevenAnswerArr[z]) {
            score++;
            alert(`WOW! You got it! Nice Job! Here are all the possible answers ${questionSevenAnswerArr}`);
            k = 6; //set k so i can break out of that loop as well since the answer was correct.
            break;
          }
        }
        if (k < 6) {
          alert(`Sorry but thats incorrect. ${5 - k} guesses left`);
        }
        if (5 - k === 0) {
          alert(`Here are all the possible answers: ${questionSevenAnswerArr}.`);
        }
      }
    }

    if (i === questionArr.length - 2) //Question 6:number guess question i=5
    {
      for (let j = 0; j < 4; j++) {
        userAnswerArr.push(prompt(questionArr[i][0]));
        if (userAnswerArr[userAnswerArr.length - 1] === questionArr[i][1].toString()) {
          score++;
          alert(responseCorrect[Math.floor(Math.random() * responseCorrect.length)]);
          j = 4;
        }
        else {
          if (userAnswerArr[userAnswerArr.length - 1] < questionArr[i][1].toString()) //if guess is too low or high respond accordingly
          {
            alert(`Sorry but thats too low. ${3 - j} guesses left`);
          }
          else {
            alert(`Sorry but thats too high. ${3 - j} guesses left`);
          }
        }
      }
    }
    if (i < 5) {
      userAnswerArr.push(prompt(questionArr[i][0]));//first 5 questions
      if (userAnswerArr[i].toLowerCase() === questionArr[i][1] || userAnswerArr[i].toLowerCase() === questionArr[i][2]) {
        score++;
        alert(responseCorrect[Math.floor(Math.random() * responseCorrect.length)]);
      }
      else {
        alert(responseWrong[Math.floor(Math.random() * responseWrong.length)]);
      }
    }
  }

  alert(`Congratulations on completing my little quiz. You got ${score} answers correct.`);
  console.table(userAnswerArr);

  document.getElementById('userNameLocation').innerHTML = `Welcome ${userName}, Congrats on getting ${score} answers correct.
 Please feel free to learn more about me below.`;
}

guessingGame();
