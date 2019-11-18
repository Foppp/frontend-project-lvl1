import {
  welcome, hello, makeUserAnswer, makeRandomNumber, isPrime,
} from '../index';

const brainPrime = () => {
  welcome(); // Welcome to the brain games
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const userName = hello(); // May i Have your name?
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomNum = makeRandomNumber(100); // generate random number from 1 to 100
    const isPrimeNumber = isPrime(randomNum); // taking a value if number is prime (from index.js)
    console.log(`Question: ${randomNum} ?`);
    const answer = makeUserAnswer(); // taking a value from user unswer
    if (answer === isPrimeNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrimeNumber}'.
Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`); // after 3 correct answers
    }
  }
};

export default brainPrime;
