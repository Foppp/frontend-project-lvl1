import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainEven = () => {
  console.log(' '); // empty line
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'; // set rule for game
  welcome(gameRule); // call welcome with game rule
  console.log(' '); // empty line
  const userName = hello(); // ask user for his name and greetings
  console.log(' '); // empty line
  for (let i = 0; i < 3; i += 1) {
    const num = makeRandomNumber(100); // random number from 1 to 30
    const isEvenCheck = (a) => { // check if number is even
      if (a % 2 === 0) {
        return true;
      } return false;
    };
    const numberIsEven = () => { // return yes or no depends on if number is even or not
      const b = isEvenCheck(num) ? 'yes' : 'no';
      return b;
    };
    const rightAnswer = numberIsEven(); // right answer for compare with user answer
    const makeResult = questionAndResult(num, rightAnswer, userName, i); // interaction
    if (makeResult === false) { // stop after wrong answer
      break;
    }
  }
};

export default brainEven;
