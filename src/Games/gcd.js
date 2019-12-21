import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'Find the greatest common divisor of given numbers.';
const makeBiggerDenom = (num1, num2) => {
  let biggerDenom;
  for (let i = 1; i < num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      biggerDenom = i;
    }
  }
  return biggerDenom;
};
const generateData = () => {
  const number1 = generateNumber(1, 50);
  const number2 = generateNumber(1, 50);
  const question = `${number1} ${number2}`;
  const rightAnswer = makeBiggerDenom(number1, number2).toString();
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
