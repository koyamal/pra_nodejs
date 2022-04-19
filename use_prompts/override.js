const prompts = require('prompts');
//prompts.override({'twitter': 'override'});
prompts.override(require('yargs').argv); //node override.js --twitter=override
const yargs = require('yargs').argv;

console.log(yargs);


(async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'twitter',
      message: `What's your twitter handle?`
    },
    {
      type: 'multiselect',
      name: 'color',
      message: 'Pick colors',
      choices: [
        { title: 'Red', value: '#ff0000' },
        { title: 'Green', value: '#00ff00' },
        { title: 'Blue', value: '#0000ff' }
      ],
    }
  ]);

  console.log(response);
})();