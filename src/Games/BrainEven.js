import {
  makeGame, cons, generateNumber,
} from '../index';

const evenGameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenGenerateQuestion = () => {
  const num = generateNumber(99) + 1;
  const isEvenCheck = (a) => {
    if (a % 2 === 0) {
      return true;
    } return false;
  };
  const rightAnswer = isEvenCheck(num) ? 'yes' : 'no';

  return cons(num, rightAnswer);
};
const evenRunIt = () => makeGame(evenGameRule, evenGenerateQuestion);

export default evenRunIt;
