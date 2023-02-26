function printType(val){
    console.log(typeof val, val);
}

let a = 0;

printType(a);

let b = '1' + a;

printType(b);

let c = 15 - b;
printType(c);