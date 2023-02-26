const a = {
    prop: 0
}

let {prop} = a;

console.log(prop, a.prop);

prop = 11;

console.log(prop, a.prop);

function fn1(obj){
    let {prop} = obj;
    prop = 1111;
    console.log(obj.prop, prop);
}

fn1(a);

