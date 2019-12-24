import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;
const maxStartNumber = 30;
const maxDiffNumber = 20;
const maxMissingIndexNumber = 8;
const generateData = () => {
  let startMember = generateNumber(1, maxStartNumber);
  const diffMember = generateNumber(1, maxDiffNumber);
  let missingIndexMember = generateNumber(0, maxMissingIndexNumber);
  let str = '';
  for (let i = 0; i < progressionLength; i += 1) {
    startMember += diffMember;
    if (i === missingIndexMember) {
      str = `${str}.. `;
      missingIndexMember = startMember;
    } else {
      str = `${str}${startMember} `;
    }
  }
  const question = str;
  const rightAnswer = missingIndexMember.toString();
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
