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