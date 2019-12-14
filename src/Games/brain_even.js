import { cons } from '@hexlet/pairs';

import { makeGame, generateNumber } from '../index';

const evenGameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (a) => {
  if (a % 2 === 0) {
    return true;
  } return false;
};
const evenGenerateQuestion = () => {
  const isQuestion = generateNumber(1, 100);
  const rightAnswer = isEven(isQuestion) ? 'yes' : 'no';

  return cons(isQuestion, rightAnswer);
};
const evenRunIt = () => makeGame(evenGameRule, evenGenerateQuestion);

export default evenRunIt;
