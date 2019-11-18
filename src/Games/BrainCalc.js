import {
  welcome, hello, makeRandomNumber, makeUserAnswer, generateToString,
} from '../index';

const brainCalc = () => {
  const makeRandomOperator = () => { // Random Operator Function
    const operator = Math.floor(Math.random() * 3); // Random number 1 -3 for operator generate
    if (operator === 0) {
      return '+';
    } if (operator === 1) {
      return '-';
    } return '*';
  };
  welcome(); // Welcome to the brain games
  console.log('What is the result of the expression?');
  const userName = hello(); // May i Have your name?
  console.log(`Hello, ${userName}!`);
  let ans = 0; // Variable for result of two numbers
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber(30); // Generate first number from 1 to 30 (from index.js)
    const number2 = makeRandomNumber(30); // Generate second number...
    const randomOperator = makeRandomOperator(); // taking a generated operator
    const toString = generateToString(number1, randomOperator, number2); // string for qiestion
    if (randomOperator === '+') {
      ans = number1 + number2;
    } if (randomOperator === '-') {
      ans = number1 - number2;
    } if (randomOperator === '*') {
      ans = number1 * number2;
    }
    console.log(`Question: ${toString} ?`);
    const answer = makeUserAnswer(); // taking a value from user unswer
    if (+answer === +ans) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ans}'.
Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`); // after 3 correct answers
    }
  }
};

export default brainCalc;
