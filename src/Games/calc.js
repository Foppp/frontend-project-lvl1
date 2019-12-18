import { cons } from '@hexlet/pairs';

import { makeGame, generateNumber } from '../index';

const calcGameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return false;
  }
  return result;
};
const calcGenerateQuestion = () => {
  const number1 = generateNumber(1, 30);
  const number2 = generateNumber(1, 30);
  const randomOperator = generateNumber(0, operators.length - 1);
  const makeOperator = operators[randomOperator];
  const question = `${number1} ${makeOperator} ${number2}`;
  const rightAnswer = calculate(makeOperator, number1, number2).toString();
  return cons(question, rightAnswer);
};
const calcRunIt = () => makeGame(calcGameRule, calcGenerateQuestion);

export default calcRunIt;
