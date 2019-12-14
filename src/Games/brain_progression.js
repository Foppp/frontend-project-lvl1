import { cons } from '@hexlet/pairs';

import { makeGame, generateNumber } from '../index';

const progGameRule = 'What number is missing in the progression?';
const progGenerateQuestion = () => {
  const randomDisNum = generateNumber(8) + 2;
  const randomStepBetweenNum = generateNumber(29) + 1;
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
  const isQuestion = newStr;
  const rightAnswer = disNum.toString();

  return cons(isQuestion, rightAnswer);
};
const progRunIt = () => makeGame(progGameRule, progGenerateQuestion);

export default progRunIt;
