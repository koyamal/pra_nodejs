let a = {
    prop: 1
}

let b = a;

console.log('a.prop: ', a.prop)
b.prop = 2;

console.log('b.prop: ', b.prop);
console.log('a.prop: ', a.prop);

b = {prop: 3};

console.log('b.prop: ', b.prop);
console.log('a.prop: ', a.prop);