function hello(){
    console.log('hello');
}

function bye(){
    console.log('bye');
}

function fn(cb){
    console.log('callback function is called');
    cb();
    if (cb.prop === undefined){
        cb.prop = 12;
    }else{
        cb.prop += 1;
    }
}

fn(hello);
console.log(hello.prop);
fn(hello);
console.log(hello.prop);
fn(hello);
console.log(hello.prop);
fn(bye);
console.log(bye.prop);