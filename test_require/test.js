console.log('test message04');
const el = require('./elements');
console.log('test message05');
const fns = require('./elements/fns');

console.log(el);

el['one'].fn();

el['two'].fn();

el['three'].fn();

const noop = v => v;
console.log(noop());

el['fns'].text('el');
fns.text('fns')
