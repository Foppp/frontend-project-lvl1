const readlineSync = require('readline-sync');

const makeRandomNumber = (n) => Math.ceil(Math.random() * n + 1);

const questionAndResult = (rule, generatedQuestion) => {
  console.log('Welcome To The Brain Games!');
  console.log(`${rule}`);
  const userName = readlineSync.question('What Is Your Name? ');
  console.log(`Hello, ${userName}`);
  for (let i = 0; i < 3; i += 1) {
    const q = generatedQuestion;
    const question = q[0];
    const rightAnswer = q[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
 Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      // ns = true;
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};

export {
  makeRandomNumber, questionAndResult,
};
