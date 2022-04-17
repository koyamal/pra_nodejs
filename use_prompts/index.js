const prompts = require('prompts');

var select;

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Are you a Man ? (y/n)',
    validate: value => (value !== "y" && value !=="n") ? `Input y or n` : true
  });
  console.log(response);
  select = response.value;
  if(select === 'y'){
    (async () => {
        const response = await prompts({
          type: 'number',
          name: 'age',
          message: 'How old are you?'
        });
      
        console.log("You are " +response.age + " old");
      })();

  }else{
    (async () => {
        const response = await prompts({
          type: 'number',
          name: 'age',
          message: 'How old are you?^-^'
        });
      
        console.log("You are " +response.age + " old");
      })();
  }
})();