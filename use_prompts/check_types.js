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
    hint: ' ',
    choices: [
      { title: 'Red', description: 'This option has a description', value: '#ff0000' },
      { title: 'Green', value: '#00ff00', disabled: true },
      { title: 'Blue', value: '#0000ff' }
    ],
  },
  {
    type: 'multiselect',
    name: 'multiselect',
    message: 'Pick colors',
    choices: [
      { title: 'Red', value: '#ff0000', selected: true},
      { title: 'Green', value: '#00ff00', disabled: true },
      { title: 'Blue', value: '#0000ff', selected: true }
    ],
    max: 2,
  },
  {
    type: 'autocomplete',
    name: 'autocomplete',
    message: 'Pick your favorite actor',
    choices: [
      { title: 'Cage' },
      { title: 'Clooney', value: 'silver-fox' },
      { title: 'Gyllenhaal' },
      { title: 'Gibson' },
      { title: 'Grant' },
      { title: 'Erik'}
    ]
  }
];

(async () => {
  const response = await prompts(questions);
  console.log(response);
})();