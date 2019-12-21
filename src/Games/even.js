import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (a) => a % 2 === 0;
const generateData = () => {
  const question = generateNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
