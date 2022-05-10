'use strict';

let responseCorrect=['Great job you are correct!', 'Nice one! You got it!','Woah how did you know that?','Superb job!', 'Nailed it!','Fantastic guess!','Absolutely Correct.','Yes Yes Yes!'];
let responseWrong=['Ooooh, so close but incorrect.','Sorry, maybe you\'ll get it next time.','Nope, not correct.','Wrong, but good guess','Dang, almost got it'];

let answerOne= prompt('Do I live in Washington State? (Yes or No?)').toLowerCase();
if (answerOne==='y' || answerOne==='yes'){
  alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
}else{
  alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
}

let answerTwo= prompt('Did I serve in the Coast Guard? (Yes or No?)').toLowerCase();
if (answerTwo==='n' || answerTwo==='no'){
  alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
}else{
  alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
}

let answerThree= prompt('Have I ever traveled outside of the United States? (Yes or No?)').toLowerCase();
if (answerThree==='y' || answerThree==='yes'){
  alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
}else{
  alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
}

let answerFour= prompt('Am I a fan of the Green Bay Packers? (Yes or No?)').toLowerCase();
if (answerFour==='y' || answerFour==='yes'){
  alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
}else{
  alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
}

let answerFive= prompt('Do I own a motorcycle? (Yes or No?)').toLowerCase();
if (answerFive==='n' || answerFive==='no'){
  alert(responseCorrect[Math.floor(Math.random()*responseCorrect.length)]);
}else{
  alert(responseWrong[Math.floor(Math.random()*responseWrong.length)]);
}

let userName=prompt('One last thing, can I ask your names? ');

document.getElementById('userNameLocation').innerHTML=`Welcome ${userName}, Please feel free to learn more about me below.`;
