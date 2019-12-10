import {
  makeGame, cons, generateNumber,
} from '../index';

const gcdGameRule = 'Find the greatest common divisor of given numbers.';
const gcdGenerateQuestion = () => {
  const number1 = generateNumber(50);
  const number2 = generateNumber(50);
  let biggerDiv = 0;
  for (let i = 1; i < number1; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      biggerDiv = i;
    }
  }
  const questionToString = `${number1} ${number2}`;
  const rightAnswer = biggerDiv.toString();
  return cons(questionToString, rightAnswer);
};
const gcdRunIt = () => makeGame(gcdGameRule, gcdGenerateQuestion);

export default gcdRunIt;
