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
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Do you like dogs?',
    initial: true
  },
  {
    type: 'list',
    name: 'list',
    message: 'Enter your phone number(ex:xxx-xxxx-xxxx)',
    separator: '-'
  }
];

(async () => {
  const response = await prompts(questions);
  console.log(response);
})();