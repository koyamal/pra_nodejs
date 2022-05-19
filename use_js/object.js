let a = {
    prop: 'Hello'
};

let b = a;

console.log('a.prop: ' + a.prop);
b.prop = 'Bye';

console.log('a.prop: ' + a.prop);