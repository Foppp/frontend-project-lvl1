import { cons } from '@hexlet/pairs';

import { makeGame, generateNumber } from '../index';

const primeGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let isPrimeNumber = true;
  for (let k = 2; k < num; k += 1) {
    isPrimeNumber = (num % k !== 0) ? isPrimeNumber : false;
  }
  return isPrimeNumber;
};
const primeGenerateQuestion = () => {
  const question = generateNumber(1, 100);
  const rightAnswer = (isPrime(question) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const primeRunIt = () => makeGame(primeGameRule, primeGenerateQuestion);

export default primeRunIt;
