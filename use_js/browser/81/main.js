function F(a, b){
    this.a = a;
    this.b = b;
    // return {a: 1};
}

F.prototype.c = function(){}

const instance = new F(1, 2);
console.log(instance);
console.log(instance instanceof F); // true
console.log(instance.__proto__ === F.prototype); // true, same meaning as one line up
console.log(instance instanceof Object); // true
console.log(instance.__proto__ === Object.prototype); // false

function G(a, b){
    this.a = a;
    this.b = b;
    return {a: 100}
}

G.prototype.c = function(){}

const instanceG = new G(1, 2);
console.log(instanceG);
console.log(instanceG instanceof G); // false
console.log(instanceG.__proto__ === G.prototype); // false, same meaning as one line up
console.log(instanceG instanceof Object); // true
console.log(instanceG.__proto__ === Object.prototype); // true, same meaning as one line up

function fn(arg){
    if(arg instanceof Array){
        arg.push('value');
    }else{
        arg['key'] = 'value';
    }
    console.log(arg);
}

fn({});
fn([]);