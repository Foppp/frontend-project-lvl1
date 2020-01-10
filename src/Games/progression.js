import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'What number is missing in the progression?';
const sequenceLength = 10;
const maxDifference = 20;
const maxMissingMemberIndex = 8;
let missingMember;
const generateData = () => {
  const difference = generateNumber(1, maxDifference);
  const missingMemberIndex = generateNumber(0, maxMissingMemberIndex);
  const progression = [generateNumber(1, maxDifference)];
  for (let i = 0; i < sequenceLength; i += 1) {
    progression.push(progression[i] + difference);
    if (i === missingMemberIndex) {
      missingMember = progression[i];
      progression[i] = '..';
    }
  }
  const question = progression.join(' ');
  const rightAnswer = missingMember.toString();
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
