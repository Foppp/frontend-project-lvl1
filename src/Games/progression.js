import { cons } from '@hexlet/pairs';

import { makeGame, generateNumber } from '../index';

const progGameRule = 'What number is missing in the progression?';
const progGenerateQuestion = () => {
  const randomDisNum = generateNumber(2, 10);
  const randomStepBetweenNum = generateNumber(1, 30);
  let progressNum = 1;
  let disNum = 0;
  let newStr = '';
  for (let k = 2; k <= 10; k += 1) {
    progressNum += randomStepBetweenNum;
    if (k === randomDisNum) {
      newStr += '.. ';
      disNum = progressNum;
      continue;
    }
    newStr = `${newStr}${progressNum} `;
  }
  const question = newStr;
  const rightAnswer = disNum.toString();

  return cons(question, rightAnswer);
};
const progRunIt = () => makeGame(progGameRule, progGenerateQuestion);

export default progRunIt;