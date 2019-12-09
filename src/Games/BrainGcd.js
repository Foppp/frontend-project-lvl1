import {
  makeGame, cons,
} from '../index';

const gcdGameRule = 'Find the greatest common divisor of given numbers.';
const gcdGenerateQuestion = () => {
  const number1 = Math.ceil(Math.random() * 50);
  const number2 = Math.ceil(Math.random() * 50);
  const makeBiggerDiv = (x, y) => {
    let biggerDiv = 0;
    for (let i = 1; i < x; i += 1) {
      if (x % i === 0 && y % i === 0) {
        biggerDiv = i;
      }
    } return biggerDiv;
  };
  const questionToString = `${number1} ${number2}`;
  const rightAnswer = makeBiggerDiv(number1, number2).toString();
  return cons(questionToString, rightAnswer);
};
const gcdRunIt = () => makeGame(gcdGameRule, gcdGenerateQuestion);

export default gcdRunIt;
