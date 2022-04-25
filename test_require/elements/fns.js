const $ = exports;

function test(type, args){
    return console.log(type, args);
}

$.text = args => test('text', args);

console.log($.text('hello'));