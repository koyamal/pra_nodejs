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
        },
        {
            type: 'text',
            name: 'baseball',
            message: 'Do you like baseball?',
          }
      ];
    const onCancel = prompt => {
      console.log('Never stop prompting!');
      return true;
    }
    const response = await prompts(questions, { onCancel });
  })();