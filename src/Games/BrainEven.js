import {
  makeGame, cons,
} from '../index';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const num = Math.ceil(Math.random() * 100);
  const isEvenCheck = (a) => {
    if (a % 2 === 0) {
      return true;
    } return false;
  };
  const rightAnswer = isEvenCheck(num) ? 'yes' : 'no';
  return cons(num, rightAnswer);
};
const runIt = () => makeGame(gameRule, generateQuestion);

export default runIt;
