import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'What number is missing in the progression?';
const sequenceLength = 10;
const maxDiffMember = 20;
const maxMissingIndexMember = 8;
let missingMember;
const generateData = () => {
  const diffMember = generateNumber(1, maxDiffMember);
  const missingIndexMember = generateNumber(0, maxMissingIndexMember);
  const sequenceStore = [generateNumber(1, maxDiffMember)];
  for (let i = 0; i < sequenceLength; i += 1) {
    sequenceStore.push(sequenceStore[i] + diffMember);
    if (i === missingIndexMember) {
      missingMember = sequenceStore[i];
      sequenceStore[i] = '..';
    }
  }
  const question = sequenceStore.join(' ');
  const rightAnswer = missingMember.toString();
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
