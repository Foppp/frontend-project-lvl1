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
  const isQuestion = `${number1} ${makeOperator} ${number2}`;
  const answer = (generatedOperator) => {
    let ans = 0;
    switch (generatedOperator) {
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
        return false;
    }
    return ans;
  };
  const rightAnswer = answer(makeOperator).toString();
  return cons(isQuestion, rightAnswer);
};
const calcRunIt = () => makeGame(calcGameRule, calcGenerateQuestion);

export default calcRunIt;
