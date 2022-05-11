'use strict';

let responseCorrect=['Great job you are correct!', 'Nice one! You got it!','Woah how did you know that?','Superb job!',
  'Nailed it!','Fantastic guess!','Absolutely Correct.','Yes Yes Yes!'];

let responseWrong=['Ooooh, so close but incorrect.','Sorry, maybe you\'ll get it next time.','Nope, not correct.','Wrong, but good guess',
  'Dang, almost got it'];

let questionArr=[['Do I live in Washington State? (Yes or No?)','y','yes'],
  ['Did I serve in the Coast Guard? (Yes or No?)','n','no'],
  ['Have I ever traveled outside of the United States? (Yes or No?)','y','yes'],
  ['Am I a fan of the Green Bay Packers? (Yes or No?)','y','yes'],
  ['Do I own a motorcycle? (Yes or No?)','n','no'],
  ['Please guess a number I\'m thinking of (1-10). (4 tries) :',Math.floor(Math.random()*9)+1],
  'Which state have I lived in for at least one year? (6 tries, more than 1 correct answer)'];

let questionSevenAnswerArr=['wisconsin','alaska','new york','washington'];

let userAnswerArr=[];
let score=0;
let userName=prompt('Hello! May I please ask your name? ');

for (let i=0; i<questionArr.length-1;i++)
{
  if (i===questionArr.length-1)
  {
    
  }

  if(i===questionArr.length-2) //number guess question
  {
    for (let j=0; j<4;j++)
    {
      userAnswerArr[i][j]=prompt(questionArr[i][0]);
      if(userAnswerArr[i][j]===questionArr[i][1].toString())
      {
        score++;
        alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
      }
      else
      {
        alert('Sorry! Please guess another number (1-10)');
      }
    }
    continue; //break or continue? want to skip rest of for loop code and move on to question 7(index6)
  }

  userAnswerArr[i]=prompt(questionArr[i][0]);
  if (userAnswerArr[i].toLowerCase()===questionArr[i][1]|| userAnswerArr[i].toLowerCase()===questionArr[i][2])
  {
    score++;
    alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
  }

}

// let answerOne= prompt('Do I live in Washington State? (Yes or No?)').toLowerCase();
// if (answerOne==='y' || answerOne==='yes'){
//   alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
// }else{
//   alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
// }

// let answerTwo= prompt('Did I serve in the Coast Guard? (Yes or No?)').toLowerCase();
// if (answerTwo==='n' || answerTwo==='no'){
//   alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
// }else{
//   alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
// }

// let answerThree= prompt('Have I ever traveled outside of the United States? (Yes or No?)').toLowerCase();
// if (answerThree==='y' || answerThree==='yes'){
//   alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
// }else{
//   alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
// }

// let answerFour= prompt('Am I a fan of the Green Bay Packers? (Yes or No?)').toLowerCase();
// if (answerFour==='y' || answerFour==='yes'){
//   alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
// }else{
//   alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
// }

// let answerFive= prompt('Do I own a motorcycle? (Yes or No?)').toLowerCase();
// if (answerFive==='n' || answerFive==='no'){
//   alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
// }else{
//   alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
// }

// let userName=prompt('Hello! May I please ask your name? ');







document.getElementById('userNameLocation').innerHTML=`Welcome ${userName}, Please feel free to learn more about me below.`;
