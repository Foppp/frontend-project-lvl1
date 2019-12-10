import {
  makeGame, cons, generateNumber,
} from '../index';

const primeGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeGenerateQuestion = () => {
  const num = generateNumber(99) + 1;
  let isPrime = true;
  for (let k = 2; k < num; k += 1) {
    isPrime = (num % k !== 0) ? isPrime : false;
  }
  const rightAnswer = (isPrime === true) ? 'yes' : 'no';
  return cons(num, rightAnswer);
};
const primeRunIt = () => makeGame(primeGameRule, primeGenerateQuestion);

export default primeRunIt;
