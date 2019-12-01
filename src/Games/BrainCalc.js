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
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber(30);
    const number2 = makeRandomNumber(30);
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
    const makeResult = questionAndResult(questionToString, rightAnswer, userName, i);
    if (makeResult === false) {
      break;
    }
  }
};
export default brainCalc;
