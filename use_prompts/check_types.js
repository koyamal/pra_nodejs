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
  }
];

(async () => {
  const response = await prompts(questions);
  console.log(response);
})();