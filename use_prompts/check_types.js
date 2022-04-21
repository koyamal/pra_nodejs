const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your name?'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Input your password'
  },
  {
    type: 'invisible',
    name: 'repassword',
    message: 'Input your password again'
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?',
    initial: 0,
    min: 0,
    max: 200
  }
];

(async () => {
  const response = await prompts(questions);
  console.log(response);
})();