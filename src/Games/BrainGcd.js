import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainGcd = () => {
  console.log(' ');
  const gameRule = 'Find the greatest common divisor of given numbers.';
  welcome(gameRule);
  console.log(' ');
  const userName = hello();
  console.log(' ');
  const makeBiggerDiv = (x, y) => {
    let biggerDiv = 0;
    for (let i = 1, k = 1; i < x; k < y, i += 1, k += 1) {
      if (x % i === 0 && y % k === 0) {
        biggerDiv = i;
      }
    } return biggerDiv;
  };
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber(50);
    const number2 = makeRandomNumber(50);
    const questionToString = `${number1} ${number2}`;
    const rightAnswer = makeBiggerDiv(number1, number2).toString();
    const makeResult = questionAndResult(questionToString, rightAnswer, userName, i);
    if (makeResult === false) {
      break;
    }
  }
};
export default brainGcd;
