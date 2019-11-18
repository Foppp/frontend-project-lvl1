import {
  welcome, hello, makeUserAnswer, makeRandomNumber,
} from '../index';

const brainProgression = () => {
  welcome(); // Welcome to the brain games
  console.log('What number is missing in the progression?');
  const userName = hello(); // May i Have your name?
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const makeRandomDisNumber = () => Math.ceil(Math.random() * 8) + 2; // generte disappear number
    const randomDisNum = makeRandomDisNumber();
    const randomProgressNum = makeRandomNumber(30); // generate random number from 1 to 30
    let progressNum = 1;
    let disNum = 0;
    let newStr = '';
    for (let k = 2; k <= 10; k += 1) { // generating 10 progression numbers
      progressNum += randomProgressNum;
      if (k === randomDisNum) {
        newStr += '.. '; // added '..' instead dissapear number
        disNum = progressNum; // saving random dissapear number to variable
        continue;
      }
      newStr += `${progressNum} `;
    }
    console.log(`Question: ${newStr} ?`);
    const answer = makeUserAnswer(); // taking a value from user unswer
    if (+answer === +disNum) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${disNum}'.
Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`); // after 3 correct answers
    }
  }
};

export default brainProgression;
