import {
  makeGame, cons, generateNumber,
} from '../index';

const calcGameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calcGenerateQuestion = () => {
  const number1 = generateNumber(30);
  const number2 = generateNumber(30);
  const randomOperator = generateNumber(operators.length);
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
      case '*':
        ans = number1 * number2;
        break;
      default:
        ans = false;
    }
    return ans;
  };
  const rightAnswer = answer(makeOperator).toString();
  return cons(questionToString, rightAnswer);
};
const calcRunIt = () => makeGame(calcGameRule, calcGenerateQuestion);

export default calcRunIt;
