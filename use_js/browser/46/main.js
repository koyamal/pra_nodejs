// const a = 'hello';
// a = 'bye';
// error

const b = {
    prop: 'hello'
}
// b = {}
// error
console.log(b);
b.prop = 'bye';
console.log(b);
b.add = 'add';
console.log(b);

const c = {
    prop: 'hello world',
    fn: function(){
        console.log('HELLO WORLD');
    }
}

c.fn();