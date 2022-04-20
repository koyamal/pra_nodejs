const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your name?'
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'text',
    name: 'sports',
    message: 'What is your favorit sports?',
  },
  {
    type: 'text',
    name: 'player',
    message:(prev, values)=> `Hi, ${values.username}! Who's your favorit ${values.sports} player?`,
  }
];

(async () => {
  const response = await prompts(questions);
  console.log(response);
})();