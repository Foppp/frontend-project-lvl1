import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainProgression = () => {
  console.log(' ');
  const gameRule = 'What number is missing in the progression?';
  welcome(gameRule);
  console.log(' ');
  const userName = hello();
  console.log(' ');
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
    disNum = disNum.toString();
    const makeResult = questionAndResult(newStr, disNum, userName, i);
    if (makeResult === false) {
      break;
    }
  }
};

export default brainProgression;
