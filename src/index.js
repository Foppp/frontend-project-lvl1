const readlineSync = require('readline-sync');

const welcome = () => console.log('Welcome to the Brain Games!');

const hello = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
const makeRandomNumber = (n) => Math.ceil(Math.random() * n); // func for some number generate
const generateToString = (num1, oper, num2) => `${num1} ${oper} ${num2}`;
const pareToString = (num1, num2) => `${num1} ${num2}`;
const makeUserAnswer = () => {
  const userAnswer = readlineSync.question('Your Answer: ');
  return userAnswer;
};
const makeBiggerDiv = (x, y) => { // func for value of bigger divider
  let biggerDiv = 0;
  for (let i = 1, k = 1; i < x; k < y, i += 1, k += 1) {
    if (x % i === 0 && y % k === 0) {
      biggerDiv = i;
    }
  } return biggerDiv;
};
const isPrime = (a) => { // func for value prime number
  for (let i = 2; i <= a; i += 1) {
    if (a % i === 0 && a !== 2) {
      return 'no';
    } return 'yes';
  } return 'Error';
};
const isEven = (b) => { // func for even number
  if (b % 2 === 0) {
    return 'yes';
  } return 'no';
};

export {
  welcome, hello, makeRandomNumber,
  generateToString, makeBiggerDiv, pareToString, isPrime,
  isEven, makeUserAnswer,
};
