import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';

const gameCycle = 3;
const makeGame = (gameRule, generateGameData) => {
  console.log('Welcome To The Brain Games!');
  console.log(`${gameRule}`);
  const userName = readlineSync.question('What Is Your Name? ');
  console.log(`Hello, ${userName}`);
  for (let i = 0; i < gameCycle; i += 1) {
    const gameData = generateGameData();
    const question = car(gameData);
    const rightAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
 Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};

export default makeGame;
