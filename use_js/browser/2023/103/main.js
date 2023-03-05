let a = 1 + 2 * 3;
console.log(a);

let a2 = (1 + 2) * 3;
console.log(a2);

let b0 = 0
let b1 = b0++;
console.log(b1, b0);

b0 = 0
let b2 = ++b0;
console.log(b2, b0);

// k1 = k0++;
let k0 = 0;
let k1;

k0 = (k1 = k0) + 1;
// K1 = k0
// 0 + 1
// k0 = 1