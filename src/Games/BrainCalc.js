import {
  makeGame, cons,
} from '../index';

const calcGameRule = 'What is the result of the expression?';
const calcGenerateQuestion = () => {
  const number1 = Math.ceil(Math.random() * 30);
  const number2 = Math.ceil(Math.random() * 30);
  const operators = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * operators.length);
  const makeOperator = operators[randomOperator];
  const questionToString = `${number1} ${makeOperator} ${number2}`;
  const answer = (f) => {
    let ans = 0;
    switch (f) {
      case '+':
        ans = number1 + number2;
        break;
      case '-':
        ans = number1 - number2;
        break;
      default:
        ans = number1 * number2;
    }
    return ans;
  };
  const rightAnswer = answer(makeOperator).toString();
  return cons(questionToString, rightAnswer);
};
const calcRunIt = () => makeGame(calcGameRule, calcGenerateQuestion);

export default calcRunIt;
