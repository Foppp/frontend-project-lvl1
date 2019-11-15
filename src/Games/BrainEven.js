import {
  welcome, hello, makeRandomNumber, makeUserAnswer,
} from '../index';

const brainEven = () => {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = hello();
  console.log(`Hello, ${userName}!`);
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = makeRandomNumber();
    console.log(`Question: ${num}`);
    const answer = makeUserAnswer();
    const correctYesAnswer = (num % 2 === 0 && answer === 'yes');
    const correctNoAnswer = (num % 2 !== 0 && answer === 'no');
    const incorrectYesAnswer = (num % 2 !== 0 && answer === 'yes');
    const incorrectNoAnswer = (num % 2 === 0 && answer === 'no');
    if (correctYesAnswer || correctNoAnswer) {
      console.log('Correct!');
      counter += 1;
    } else if (incorrectYesAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.
          Let's try again, ${userName}!`);
      break;
    } else if (incorrectNoAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
          Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Wrong answer. You must enter "yes", or "no"!');
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainEven;
