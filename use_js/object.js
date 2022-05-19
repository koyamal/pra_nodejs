let a = {
    prop: 'Hello'
};

let b = a;

console.log('a.prop: ' + a.prop);
b.prop = 'Bye';

console.log('a.prop: ' + a.prop);


const c = {
    prop: 'Hello'
};
console.log('c.prop: ' + c.prop);
c.prop = 'Bye';
console.log('c.prop: ' + c.prop);
//c = {} //エラー