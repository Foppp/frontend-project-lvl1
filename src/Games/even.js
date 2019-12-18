import { cons } from '@hexlet/pairs';

import { makeGame, generateNumber } from '../index';

const evenGameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (a) => a % 2 === 0;
const evenGenerateQuestion = () => {
  const question = generateNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};
const evenRunIt = () => makeGame(evenGameRule, evenGenerateQuestion);

export default evenRunIt;
