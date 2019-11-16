import {
  welcome, hello, makeRandomNumber, makeUserAnswer, generateToString,
} from '../index';

const brainCalc = () => {
  const makeRandomOperator = () => {
    const operator = Math.floor(Math.random() * 3);
    if (operator === 0) {
      return '+';
    } if (operator === 1) {
      return '-';
    } return '*';
  };
  /*  const generateToString = (num1, oper, num2) => `${num1} ${oper} ${num2}`; */
  welcome();
  console.log('What is the result of the expression?');
  const userName = hello();
  console.log(`Hello, ${userName}!`);
  let answerCounter = 0;
  let ans = 0;
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber();
    const number2 = makeRandomNumber();
    const randomOperator = makeRandomOperator();
    const toString = generateToString(number1, randomOperator, number2);
    if (randomOperator === '+') {
      ans = number1 + number2;
    } if (randomOperator === '-') {
      ans = number1 - number2;
    } if (randomOperator === '*') {
      ans = number1 * number2;
    }
    console.log(`Question: ${toString} ?`);
    const answer = makeUserAnswer();
    if (+answer === +ans) {
      console.log('Correct!');
      answerCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ans}'.
Let's try again, ${userName}!`);
      break;
    }
  }
  if (answerCounter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainCalc;
