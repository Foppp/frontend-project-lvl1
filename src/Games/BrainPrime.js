import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainPrime = () => {
  console.log(' ');
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  welcome(gameRule);
  console.log(' ');
  const userName = hello();
  console.log(' ');
  for (let i = 0; i < 3; i += 1) {
    const num = makeRandomNumber(100);
    const isPrimeCheck = (x) => {
      for (let k = 2; k < x; k += 1) {
        if (x % k === 0) {
          return false;
        }
      } return true;
    };
    const numberIsPrime = () => {
      const b = isPrimeCheck(num) === true ? 'yes' : 'no';
      return b;
    };
    const rightAnswer = numberIsPrime();
    const makeResult = questionAndResult(num, rightAnswer, userName, i);
    if (makeResult === false) {
      break;
    }
  }
};
export default brainPrime;
