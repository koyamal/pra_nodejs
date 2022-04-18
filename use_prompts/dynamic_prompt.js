const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'soccer',
    message: 'Do you like soccer?'
  },
  {
    type: prev => prev == 'Yes' || prev === 'yes' || prev === 'y' ? 'text' : null,
    name: 'player',
    message: 'Your favorit soccer player'
  }
];

(async () => {
  const response = await prompts(questions);
  console.log(response);
})();