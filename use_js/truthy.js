let a = 1;
let b = 0;
let c = 3;
a && console.log('Hello');
b && console.log('Bye');

console.log(a && b); // 0(b)
console.log(b && a); // 0(b)
console.log(a && c); // 3(c)
console.log(c && a); // 1(a)
console.log(a && b && c); //0(b)
