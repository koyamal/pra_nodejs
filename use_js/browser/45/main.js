// primitive
let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b);

// object
let c = {
    prop: 'hello'
}
let d = c;
console.log(c, d);
d.prop = 'bye';
console.log(c, d);

let e = c;
e = {};
console.log(c, e);