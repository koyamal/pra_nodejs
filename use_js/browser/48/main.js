const a = {
    prop: 0
}

let {prop} = a;
prop = 1;

console.log(a, prop);

function fn(obj){
    let { prop } = obj;
    prop = 1;
    console.log(obj, prop);
}
fn(a);

const c = {
    prop1: {
        prop2: 0
    }
}
let { prop1 } = c;
console.log(prop1);
prop1.prop2 = 1;
console.log(c, prop1);