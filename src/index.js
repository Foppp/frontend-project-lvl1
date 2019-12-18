import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';

const rightAnswerCycles = 3;
const makeGame = (gameRule, gameData) => {
  console.log('Welcome To The Brain Games!');
  console.log(`${gameRule}`);
  const userName = readlineSync.question('What Is Your Name? ');
  console.log(`Hello, ${userName}`);
  for (let i = 0; i < rightAnswerCycles; i += 1) {
    const questions = gameData();
    const ask = car(questions);
    const rightAnswer = cdr(questions);
    console.log(`Question: ${ask}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
 Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};

export default makeGame;
