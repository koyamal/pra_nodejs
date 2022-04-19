const prompts = require('prompts');

(async () => {
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
  const onSubmit = (prompt, answer) => console.log(`Thanks I got ${answer} from ${prompt.name}`);
  const response = await prompts(questions, { onSubmit });
  console.log(response);
})();