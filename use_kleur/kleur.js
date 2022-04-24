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

const { yellow, red, cyan } = require('kleur');

console.log(yellow(`foo ${red().bold('red')} bar ${cyan('cyan')} baz`));
console.log(yellow('foo ' + red().bold('red') + ' bar ' + cyan('cyan') + ' baz'));

console.log(kleur.reset('reset'));
console.log(kleur.bold('bold'));
console.log(kleur.dim('dim'));
console.log(kleur.italic('italic'));
console.log(kleur.underline('underline'));
console.log(kleur.inverse('inverse'));
console.log(kleur.hidden('hidden'));
console.log(kleur.strikethrough('strikethrough'));
