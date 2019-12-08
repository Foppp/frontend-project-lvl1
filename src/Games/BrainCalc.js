import {
  makeGame, cons,
} from '../index';

const calcGameRule = 'What is the result of the expression?';
const calcGenerateQuestion = () => {
  const number1 = Math.ceil(Math.random() * 30);
  const number2 = Math.ceil(Math.random() * 30);
  const makeRandomOperator = () => {
    const operator = Math.floor(Math.random() * 3);
    const operatorResult = ['+', '-', '*'];
    return operatorResult[operator];
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
const calcRunIt = () => makeGame(calcGameRule, calcGenerateQuestion);

export default calcRunIt;
