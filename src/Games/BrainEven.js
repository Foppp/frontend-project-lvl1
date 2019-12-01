import {
  welcome, hello, makeRandomNumber, questionAndResult,
} from '../index';

const brainEven = () => {
  console.log(' ');
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  welcome(gameRule);
  console.log(' ');
  const userName = hello();
  console.log(' ');
  for (let i = 0; i < 3; i += 1) {
    const num = makeRandomNumber(100);
    const isEvenCheck = (a) => {
      if (a % 2 === 0) {
        return true;
      } return false;
    };
    const numberIsEven = () => {
      const b = isEvenCheck(num) ? 'yes' : 'no';
      return b;
    };
    const rightAnswer = numberIsEven();
    const makeResult = questionAndResult(num, rightAnswer, userName, i);
    if (makeResult === false) {
      break;
    }
  }
};

export default brainEven;
