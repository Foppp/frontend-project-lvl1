import {
  welcome, hello, makeUserAnswer, pareToString, makeRandomNumber, makeBiggerDiv,
} from '../index';

const brainGcd = () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  const userName = hello();
  console.log(`Hello, ${userName}!`);
  let answerCounter = 0;
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber();
    const number2 = makeRandomNumber();
    const biggerDivider = makeBiggerDiv(number1, number2);
    const toString = pareToString(number1, number2);
    console.log(`Question: ${toString} ?`);
    const answer = makeUserAnswer();
    if (+answer === +biggerDivider) {
      console.log('Correct!');
      answerCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${biggerDivider}'.
  Let's try again, ${userName}!`);
      break;
    }
  }
  if (answerCounter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainGcd;
