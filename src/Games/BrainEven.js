import {
  welcome, hello, makeRandomNumber, isEven, makeUserAnswer,
} from '../index';

const brainEven = () => {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = hello();
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const num = makeRandomNumber(30);
    const makeIsEven = isEven(num);
    console.log(`Question: ${num}`);
    const answer = makeUserAnswer();
    if (answer === makeIsEven) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${makeIsEven}'.
          Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainEven;
