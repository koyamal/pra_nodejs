let a = 0;

console.log(a);

let b;
//a = b = a + 1; // let b = ++a;
a = (b = a) + 1; // let b = a++;
console.log(a, b);

function fn(){
    let a = 0;
    return a++;
}

console.log(fn()); //0