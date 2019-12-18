import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '../index';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let k = 2; k < number; k += 1) {
    if (number % k === 0) {
      return false;
    }
  } return number > 1;
};
const generateData = () => {
  const question = generateNumber(1, 100);
  const rightAnswer = (isPrime(question) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
