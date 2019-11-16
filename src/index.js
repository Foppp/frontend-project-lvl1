const readlineSync = require('readline-sync');

const welcome = () => console.log('Welcome to the Brain Games!');
const hello = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
const makeRandomNumber = () => Math.floor(Math.random() * 30);
const generateToString = (num1, oper, num2) => `${num1} ${oper} ${num2}`;
const pareToString = (num1, num2) => `${num1} ${num2}`;
const makeUserAnswer = () => {
  const userAnswer = readlineSync.question('Your Answer: ');
  return userAnswer;
};
const makeBiggerDiv = (x, y) => {
  let biggerDiv = 0;
  for (let i = 1, k = 1; i < x; k < y, i += 1, k += 1) {
    if (x % i === 0 && y % k === 0) {
      biggerDiv = i;
    }
  } return biggerDiv;
};
export {
  welcome, hello, makeRandomNumber, makeUserAnswer, generateToString, makeBiggerDiv, pareToString,
};
