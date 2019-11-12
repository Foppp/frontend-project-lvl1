const readlineSync = require('readline-sync');

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your Answer: ');
    if (num % 2 === 0 && answer === 'yes' || num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else if (num % 2 !== 0 && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${userName}!`);
      break;
    } else if (num % 2 === 0 && answer === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Wrong answer. You must enter "yes", or "no"!');
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
brainEven();

export default brainEven;
