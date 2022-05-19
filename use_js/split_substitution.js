const a = {
    prop: 1
};

let {prop} = a;
console.log('prop: ' + prop);
console.log('a.prop: ' + a.prop);

prop = 3;

console.log('prop: ' + prop);
console.log('a.prop: ' + a.prop);