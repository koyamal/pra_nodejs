function fn(a, b=1){
    console.log(a, b);
}

fn(0, 2); // 0 2
fn(1); // 1 1
fn(1, null); // 1 null
fn(1, undefined); // 1 1

function fn2(){
    const a = arguments[0];
    const b = arguments[1];
    console.log(arguments);
    console.log(a, b);
}

fn2(1, 2);