import { cons } from '@hexlet/pairs';

import { makeGame, generateNumber } from '../index';

const calcGameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const answerCalculate = (generatedOperator, num1, num2) => {
  let ans = 0;
  switch (generatedOperator) {
    case '+':
      ans = num1 + num2;
      break;
    case '-':
      ans = num1 - num2;
      break;
    case '*':
      ans = num1 * num2;
      break;
    default:
      return false;
  }
  return ans;
};
const calcGenerateQuestion = () => {
  const number1 = generateNumber(1, 30);
  const number2 = generateNumber(1, 30);
  const randomOperator = generateNumber(0, operators.length - 1);
  const makeOperator = operators[randomOperator];
  const isQuestion = `${number1} ${makeOperator} ${number2}`;
  const rightAnswer = answerCalculate(makeOperator, number1, number2).toString();
  return cons(isQuestion, rightAnswer);
};
const calcRunIt = () => makeGame(calcGameRule, calcGenerateQuestion);

export default calcRunIt;
