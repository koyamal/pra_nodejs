const $ = exports;

function test(type, args){
    console.log(type, args);
}

$.text = args => test('text', args);

console.log('test message01');
$.text('test message02');
console.log($.text('test message02')); //text test message02, undefined
console.log('test message03');