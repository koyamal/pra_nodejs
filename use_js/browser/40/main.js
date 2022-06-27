function printEquality(a, b){
    console.log(`Check Eauality of ${a} (${typeof a}) and ${b} (${typeof b})`)
    console.log(a === b);
    console.log(a == b);
}

let a = '1';
let b = 1;

printEquality(a, b);

let c = true;
printEquality(b, c);

let e = "";
let f = 0;
printEquality(e, f);