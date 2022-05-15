let val;

const uName = val || 'Tom';

console.log(uName);

let a = 1;
let b = 0;
let c = 3;

console.log(a || b); // 1(a)
console.log(b || a); // 1(a)
console.log(a || c); // 1(a)
console.log(c || a); // 3(c)
console.log(a || b || c); //1(a)