function fn(a, b){
    console.log(a, b);
}

fn(3);


function fn(a){
    console.log(13);
}

fn(2);

function fnn(a, b = 1){
    console.log(a, b);
}

fnn(2);

function argFun(a, b){
    console.log(arguments);
}

argFun(11, 123);