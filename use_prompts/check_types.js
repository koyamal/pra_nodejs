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
  },
  {
    type: 'toggle',
    name: 'toggle',
    message: 'Do you like cat?',
    initial: true,
    active: 'Yes',
    inactive: 'No'
  },
  {
    type: 'select',
    name: 'select',
    message: 'Pick a color',
    choices: [
      { title: 'Red', description: 'This option has a description', value: '#ff0000' },
      { title: 'Green', value: '#00ff00', disabled: true },
      { title: 'Blue', value: '#0000ff' }
    ],
  }
];

(async () => {
  const response = await prompts(questions);
  console.log(response);
})();