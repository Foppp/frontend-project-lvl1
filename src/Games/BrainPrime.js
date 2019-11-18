import {
  welcome, hello, makeUserAnswer, makeRandomNumber, isPrime,
} from '../index';

const brainPrime = () => {
  welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const userName = hello();
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomNum = makeRandomNumber(100);
    const isPrimeNumber = isPrime(randomNum);
    console.log(`Question: ${randomNum} ?`);
    const answer = makeUserAnswer();
    if (answer === isPrimeNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrimeNumber}'.
  Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainPrime;
