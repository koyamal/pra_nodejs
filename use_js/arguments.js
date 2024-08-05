function fn(a, b=1){
    console.log('fn');
    console.log(arguments);
    console.log(a, b);
    console.log(a);
}

fn(1);
fn(1, 3);
fn(1, 2, 3);

function fn2(){
    console.log('fn2');
    console.log(arguments);
}

fn2(12, 43, 45);