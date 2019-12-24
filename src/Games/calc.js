import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '..';

const gameRule = 'What is the result of the expression?';
const maxRandomNum = 30;
const operators = ['+', '-', '*'];
const calculateResult = (operator, number1, number2) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      return false;
  }
  return result;
};
const generateData = () => {
  const number1 = generateNumber(1, maxRandomNum);
  const number2 = generateNumber(1, maxRandomNum);
  const randomOperatorIndex = generateNumber(0, operators.length - 1);
  const randomOperator = operators[randomOperatorIndex];
  const question = `${number1} ${randomOperator} ${number2}`;
  const rightAnswer = calculateResult(randomOperator, number1, number2).toString();
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
