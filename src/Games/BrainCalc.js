import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainCalc = () => {
  console.log(' '); // empty line
  const gameRule = 'What is the result of the expression?'; // set rule of the game
  welcome(gameRule); // call welcome with game rule
  console.log(' '); // empty line
  const userName = hello(); // ask user for his name and greetings
  console.log(' '); // empty line
  const makeRandomOperator = () => { // random operator for game
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
    const number1 = makeRandomNumber(30); // making random first number from 1 to 30
    const number2 = makeRandomNumber(30); // making random second number from 1 to 30
    const randomOperator = makeRandomOperator(); // calling operator from random
    const questionToString = `${number1} ${randomOperator} ${number2}`; // making string for question
    const answer = (f) => { // counting the answer depends on random operator
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
    const rightAnswer = answer(randomOperator).toString(); // answer for compare with user answer
    const makeResult = questionAndResult(questionToString, rightAnswer, userName, i); // interaction
    if (makeResult === false) { // stop after wrong answer
      break;
    }
  }
};
export default brainCalc;
