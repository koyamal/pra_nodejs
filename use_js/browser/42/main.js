const a = 1;
const b = 0;
const c = 3;
const d = 0;

console.log(a && b); // b
console.log(a && c); // c
console.log(c && a); // a
console.log(b && c); // b

console.log(a || b); // a
console.log(a || c); // a
console.log(b || a); // a
console.log(c || b); // c
console.log(c || a); // c

console.log((a || b) && (c || d)); // console.log(a && c); // c