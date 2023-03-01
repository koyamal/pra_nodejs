const fn1 = new Function('a', 'b', 'return a + b');

console.log(fn1);

const result = fn1(1, 2);

console.log(result);