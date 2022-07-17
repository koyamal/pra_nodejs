const fn1 = new Function('a', 'b', 'return a + b');

const result = fn1(1, 2);

console.log(fn1 instanceof Function);
console.log(result);

function fn2(a, b){
    return a + b;
}

const result2 = fn2(1, 3);

console.log(fn2 instanceof Function);
console.log(result2);