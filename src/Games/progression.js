import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;
const maxDiffNumber = 20;
const maxMissingIndexNumber = 8;
let missingMember;
const generateData = () => {
  const diffMember = generateNumber(1, maxDiffNumber);
  const missingIndexMember = generateNumber(0, maxMissingIndexNumber);
  const arr = [generateNumber(1, maxDiffNumber)];
  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(arr[i] + diffMember);
    if (i === missingIndexMember) {
      missingMember = arr[i];
      arr[i] = '..';
    }
  }
  const question = arr.join(' ');
  const rightAnswer = missingMember.toString();
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
