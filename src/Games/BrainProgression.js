import {
  makeGame, cons,
} from '../index';

const progGameRule = 'What number is missing in the progression?';
const progGenerateQuestion = () => {
  const makeRandomDisNumber = () => Math.ceil(Math.random() * 8) + 2;
  const randomDisNum = makeRandomDisNumber();
  const randomStepBetweenNum = Math.ceil(Math.random() * 30);
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
    newStr += `${progressNum} `;
  }
  const questionToString = newStr;
  const rightAnswer = disNum.toString();

  return cons(questionToString, rightAnswer);
};
const progRunIt = () => makeGame(progGameRule, progGenerateQuestion);

export default progRunIt;
