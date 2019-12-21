import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;
const generateData = () => {
  const missingNumberIndex = generateNumber(2, 10);
  const progressionStep = generateNumber(1, 30);
  let progressionNumber = 1;
  let missingNumber;
  let newStr = '';
  for (let k = 2; k <= progressionLength; k += 1) {
    progressionNumber += progressionStep;
    if (k === missingNumberIndex) {
      newStr = `${newStr}.. `;
      missingNumber = progressionNumber;
    } else {
      newStr = `${newStr}${progressionNumber} `;
    }
  }
  const question = newStr;
  const rightAnswer = missingNumber.toString();

  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
