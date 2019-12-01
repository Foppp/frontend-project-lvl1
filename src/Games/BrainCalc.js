import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainCalc = () => {
  console.log(' ');
  const gameRule = 'What is the result of the expression?';
  welcome(gameRule);
  console.log(' ');
  const userName = hello();
  console.log(' ');
  const makeRandomOperator = () => { // Random Operator Function
    const operator = Math.floor(Math.random() * 3); // Random number 1 -3 for operator generate
    if (operator === 0) {
      return '+';
    } if (operator === 1) {
      return '-';
    } return '*';
  };
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber(30);
    const number2 = makeRandomNumber(30);
    const randomOperator = makeRandomOperator();
    const toString = `${number1} ${randomOperator} ${number2}`;
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
    let rightAnswer = answer(randomOperator);
    rightAnswer = rightAnswer.toString();
    const makeResult = questionAndResult(toString, rightAnswer, userName, i);
    if (makeResult === false) {
      break;
    }
  }
};
export default brainCalc;
