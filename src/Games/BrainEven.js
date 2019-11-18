import {
  welcome, hello, makeRandomNumber, isEven, makeUserAnswer,
} from '../index';

const brainEven = () => {
  welcome(); // Welcome to the brain games
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = hello(); // May i Have your name?
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const num = makeRandomNumber(30); // generate random number from 1 to 30
    const makeIsEven = isEven(num); // taking a result of function if number is even from index.js
    console.log(`Question: ${num} ?`);
    const answer = makeUserAnswer(); // taking a value from user unswer
    if (answer === makeIsEven) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${makeIsEven}'.
Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`); // after 3 correct answers
    }
  }
};

export default brainEven;
