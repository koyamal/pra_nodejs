const obj = {prop: 1};

const discriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(discriptor);

const obj2 = {};

Object.defineProperty(obj2, 'prop', {
    value: 11
});

const discriptor2 = Object.getOwnPropertyDescriptor(obj2, 'prop');
console.log(discriptor2);

obj2.prop = 1000;

console.log(obj2);


const obj3 = {};

Object.defineProperty(obj3, 'prop', {
    value: 11,
    writable: true
});

const discriptor3 = Object.getOwnPropertyDescriptor(obj3, 'prop');
console.log(discriptor3);

obj3.prop = 1000;

console.log(obj3);