import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainProgression = () => {
  console.log(' '); // empty line
  const gameRule = 'What number is missing in the progression?'; // set game rule
  welcome(gameRule); // call welcome with game rule
  console.log(' '); // empty string
  const userName = hello(); // ask user for his name and greetings
  console.log(' '); // empty line
  for (let i = 0; i < 3; i += 1) {
    const makeRandomDisNumber = () => Math.ceil(Math.random() * 8) + 2;
    const randomDisNum = makeRandomDisNumber(); // makeing dissapear number from 10 of progression
    const randomStepBetweenNum = makeRandomNumber(30); // random steps of numbers of progression
    let progressNum = 1;
    let disNum = 0;
    let newStr = '';
    for (let k = 2; k <= 10; k += 1) { // set progression, string for question and dissapear number
      progressNum += randomStepBetweenNum;
      if (k === randomDisNum) {
        newStr += '.. ';
        disNum = progressNum;
        continue;
      }
      newStr += `${progressNum} `;
    }
    const questionToString = newStr; // string for question to constant
    const rightAnswer = disNum.toString(); // right answer to constant
    const makeResult = questionAndResult(questionToString, rightAnswer, userName, i); // interaction
    if (makeResult === false) { // stop after wrong answer
      break;
    }
  }
};

export default brainProgression;
