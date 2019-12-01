const readlineSync = require('readline-sync');

const welcome = (str) => {
  console.log('Welcome To The Brain Games!');
  console.log(`${str}`);
};
const hello = () => {
  const userName = readlineSync.question('What Is Your Name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};
const makeRandomNumber = (n) => Math.ceil(Math.random() * n + 1);
const questionAndResult = (question, rightAnswer, name, counter) => {
  let ans = true;
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your Answer: ');
  if (rightAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${name}!`);
    ans = false;
  } else {
    console.log('Correct!');
    ans = true;
    if (counter === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
  return ans;
};

export {
  welcome, hello, makeRandomNumber, questionAndResult,
};
