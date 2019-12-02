import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainPrime = () => {
  console.log(' '); // empty string
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // set game rule
  welcome(gameRule); // call welcome with game rule
  console.log(' '); // empty string
  const userName = hello(); // ask user for his name and greetings
  console.log(' '); // empty string
  for (let i = 0; i < 3; i += 1) {
    const num = makeRandomNumber(100); // random number from 1 to 100
    const isPrimeCheck = (x) => { // check if number is prime
      for (let k = 2; k < x; k += 1) {
        if (x % k === 0) {
          return false;
        }
      } return true;
    };
    const numberIsPrime = () => { // return yes or no depends on if number is even or not
      const b = isPrimeCheck(num) === true ? 'yes' : 'no';
      return b;
    };
    const rightAnswer = numberIsPrime(); // set right answer to constant
    const makeResult = questionAndResult(num, rightAnswer, userName, i); // interaction
    if (makeResult === false) { // stop after wrong answer
      break;
    }
  }
};
export default brainPrime;
