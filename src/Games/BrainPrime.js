import {
  makeGame, cons,
} from '../index';

const primeGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGenerateQuestion = () => {
  const num = Math.ceil(Math.random() * 100);
  const isPrimeCheck = (x) => {
    for (let k = 2; k < x; k += 1) {
      if (x % k === 0) {
        return false;
      }
    } return true;
  };
  const rightAnswer = isPrimeCheck(num) === true ? 'yes' : 'no';
  return cons(num, rightAnswer);
};

const primeRunIt = () => makeGame(primeGameRule, primeGenerateQuestion);

export default primeRunIt;
