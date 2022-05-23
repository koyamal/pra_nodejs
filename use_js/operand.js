let a = 0;

console.log(a);

let b;
//a = b = a + 1; // let b = ++a;
a = (b = a) + 1; // let b = a++;
console.log(a, b);