const readlineSync = require('readline-sync');

const welcome = () => console.log('Welcome to the Brain Games!');
const hello = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
const makeRandomNumber = () => Math.floor(Math.random() * 30);
const makeUserAnswer = () => {
  const userAnswer = readlineSync.question('Your Answer: ');
  return userAnswer;
};

export {
  welcome, hello, makeRandomNumber, makeUserAnswer,
};
