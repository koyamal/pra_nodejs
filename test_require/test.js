const el = require('./elements');
const fns = require('./elements/fns');

console.log(el);

el['one'].fn();

el['two'].fn();

el['three'].fn();

const noop = v => v;
console.log(noop());

el['fns'].text('el');
fns.text('fns')
