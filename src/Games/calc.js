import { cons } from '@hexlet/pairs';

import generateNumber from '../utils';

import makeGame from '../index';

const gameRule = 'What is the result of the expression?';
const operatorList = ['+', '-', '*'];
const calculate = (operator, number1, number2) => {
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
  const number1 = generateNumber(1, 30);
  const number2 = generateNumber(1, 30);
  const randomOperatorIndex = generateNumber(0, operatorList.length - 1);
  const randomOperator = operatorList[randomOperatorIndex];
  const question = `${number1} ${randomOperator} ${number2}`;
  const rightAnswer = calculate(randomOperator, number1, number2).toString();
  return cons(question, rightAnswer);
};
const runGame = () => makeGame(gameRule, generateData);

export default runGame;
