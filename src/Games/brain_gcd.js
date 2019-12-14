import {
  makeGame, cons, generateNumber,
} from '../index';

const gcdGameRule = 'Find the greatest common divisor of given numbers.';
const isGcd = (firstNumber, secondNumber) => {
  let biggerDiv = 0;
  for (let i = 1; i < firstNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      biggerDiv = i;
    }
  }
  return biggerDiv;
};
const gcdGenerateQuestion = () => {
  const number1 = generateNumber(50);
  const number2 = generateNumber(50);
  const isQuestion = `${number1} ${number2}`;
  const rightAnswer = isGcd(number1, number2).toString();
  return cons(isQuestion, rightAnswer);
};
const gcdRunIt = () => makeGame(gcdGameRule, gcdGenerateQuestion);

export default gcdRunIt;
