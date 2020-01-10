import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'What number is missing in the progression?';
const maxStartMember = 30;
const sequenceLength = 10;
const maxDifference = 20;
const maxMissingMemberIndex = sequenceLength - 2;
const generateData = () => {
  const startMember = generateNumber(1, maxStartMember);
  const difference = generateNumber(1, maxDifference);
  const missingMemberIndex = generateNumber(0, maxMissingMemberIndex);
  const progression = Array.from(Array(sequenceLength), (_, x) => startMember + (difference * x));
  progression[missingMemberIndex] = '..';
  const missingMember = startMember + (difference * missingMemberIndex);
  // const missingMember = startMember + (difference * missingMemberIndex);
  // const questionSequence = [];
  // for (let i = 0; i < sequenceLength - 1; i += 1) {
  //   questionSequence[0] = startMember;
  //   questionSequence.push(questionSequence[i] + difference);
  //   if (i === missingMemberIndex) {
  //     questionSequence[i] = '..';
  //   }
  // }
  const question = progression.join(' ');
  const rightAnswer = missingMember.toString();
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
