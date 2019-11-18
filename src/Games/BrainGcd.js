import {
  welcome, hello, makeUserAnswer, pareToString, makeRandomNumber, makeBiggerDiv,
} from '../index';

const brainGcd = () => {
  welcome(); // Welcome to the brain games
  console.log('Find the greatest common divisor of given numbers.');
  const userName = hello(); // May i Have your name?
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber(50); // generate first random number from 1 to 50
    const number2 = makeRandomNumber(50); // generate second random number from 1 to 50
    const biggerDivider = makeBiggerDiv(number1, number2); // taking a value of bigger divider
    const toString = pareToString(number1, number2); // making string for question
    console.log(`Question: ${toString} ?`);
    const answer = makeUserAnswer(); // taking a value from user unswer
    if (+answer === +biggerDivider) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${biggerDivider}'.
Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`); // after 3 correct answers
    }
  }
};

export default brainGcd;
