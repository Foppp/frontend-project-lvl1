import {
  welcome, hello, makeUserAnswer, makeRandomNumber,
} from '../index';

const brainProgression = () => {
  welcome();
  console.log('What number is missing in the progression?');
  const userName = hello();
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const makeRandomDisNumber = () => Math.ceil(Math.random() * 8) + 2;
    const randomDisNum = makeRandomDisNumber();
    const randomProgressNum = makeRandomNumber(30);
    let progressNum = 1;
    let disNum = 0;
    let newStr = '';
    for (let k = 2; k <= 10; k += 1) {
      progressNum += randomProgressNum;
      if (k === randomDisNum) {
        newStr += '.. ';
        disNum = progressNum;
        continue;
      }
      newStr += `${progressNum} `;
    }
    console.log(`Question: ${newStr} ?`);
    const answer = makeUserAnswer();
    if (+answer === +disNum) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${disNum}'.
    Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainProgression;
