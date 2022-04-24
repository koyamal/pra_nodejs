const kleur = require('kleur');
console.log(kleur.red('red text'));
console.log(kleur.green('green text'));

//const bold = require('kleur');

//console.log(bold.red('this is a bold red message'));
//console.log(bold.italic('this is a bold italicized message'));
//console.log(bold.yellow().bgRed().italic('this is a bold yellow italicized message'));

const { bold, green } = require('kleur');

console.log(bold().red('this is a bold red message'));
console.log(bold().italic('this is a bold italicized message'));
console.log(bold().yellow().bgRed().italic('this is a bold yellow italicized message'));
console.log(green().bold().underline('this is a bold green underlined message'));