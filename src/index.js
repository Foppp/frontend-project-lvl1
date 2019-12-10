import { cons, car, cdr } from '@hexlet/pairs';

const readlineSync = require('readline-sync');

const generateNumber = (n) => Math.floor(Math.random() * n);

const makeGame = (gameRule, gameData) => {
  console.log('Welcome To The Brain Games!');
  console.log(`${gameRule}`);
  const userName = readlineSync.question('What Is Your Name? ');
  console.log(`Hello, ${userName}`);
  for (let i = 0; i < 3; i += 1) {
    const questions = gameData();
    const ask = car(questions);
    const rightAnswer = cdr(questions);
    console.log(`Question: ${ask}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
 Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};

export {
  makeGame, cons, generateNumber,
};
