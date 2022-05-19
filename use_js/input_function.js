let a = 0;

function fn1(arg1){
    arg1 = 1;
    console.log('a: ' + a);
    console.log('arg1: ' + arg1);
}

fn1(a);

let b = {
    prop: 1
}

function fn2(arg2){
    arg2.prop = 2;
    console.log('b: ' + b.prop);
    console.log('arg2: ' + arg2.prop);
}

fn2(b);