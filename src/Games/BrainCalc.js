import {
  makeGame, cons,
} from '../index';

const gameRule = 'What is the result of the expression?'; // set rule of the game
const generateQuestion = () => {
  const number1 = Math.ceil(Math.random() * 30);
  const number2 = Math.ceil(Math.random() * 30);
  const makeRandomOperator = () => {
    const operator = Math.floor(Math.random() * 3);
    let operatorResult = '';
    switch (operator) {
      case 0:
        operatorResult = '+';
        break;
      case 1:
        operatorResult = '-';
        break;
      default:
        operatorResult = '*';
    }
    return operatorResult;
  };
  const randomOperator = makeRandomOperator();
  const questionToString = `${number1} ${randomOperator} ${number2}`;
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
  const rightAnswer = answer(randomOperator).toString();
  return cons(questionToString, rightAnswer);
};
const runIt = () => makeGame(gameRule, generateQuestion);

export default runIt;
