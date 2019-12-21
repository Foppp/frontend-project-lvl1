import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  } if (number === 2) {
    return true;
  } for (let k = 2; k <= number / 2; k += 1) {
    if (number % k === 0) {
      return false;
    }
  } return true;
};
const generateData = () => {
  const question = generateNumber(1, 100);
  const rightAnswer = (isPrime(question) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
