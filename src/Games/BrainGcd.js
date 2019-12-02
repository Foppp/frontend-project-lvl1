import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainGcd = () => {
  console.log(' '); // empty line
  const gameRule = 'Find the greatest common divisor of given numbers.'; // set game rule
  welcome(gameRule); // call welcome with rule game
  console.log(' '); // empty line
  const userName = hello(); // ask user for his name and greetings
  console.log(' '); // empty line
  const makeBiggerDiv = (x, y) => { // find and return bigger devider between two numbers
    let biggerDiv = 0;
    for (let i = 1, k = 1; i < x; k < y, i += 1, k += 1) {
      if (x % i === 0 && y % k === 0) {
        biggerDiv = i;
      }
    } return biggerDiv;
  };
  for (let i = 0; i < 3; i += 1) {
    const number1 = makeRandomNumber(50); // first random number from 1 to 50
    const number2 = makeRandomNumber(50); // second random number from 1 to 50
    const questionToString = `${number1} ${number2}`; // making string for question
    const rightAnswer = makeBiggerDiv(number1, number2).toString(); // set answer to constant
    const makeResult = questionAndResult(questionToString, rightAnswer, userName, i); // interaction
    if (makeResult === false) { // stop after wrong answer
      break;
    }
  }
};
export default brainGcd;
