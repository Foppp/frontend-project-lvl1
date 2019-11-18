import {
  welcome, hello, makeUserAnswer, pareToString, makeRandomNumber, makeBiggerDiv,
} from '../index';

const brainGcd = () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  const userName = hello();
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber(55);
    const number2 = makeRandomNumber(45);
    const biggerDivider = makeBiggerDiv(number1, number2);
    const toString = pareToString(number1, number2);
    console.log(`Question: ${toString} ?`);
    const answer = makeUserAnswer();
    if (+answer === +biggerDivider) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${biggerDivider}'.
  Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainGcd;
