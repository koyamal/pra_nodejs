const targetObj = {a: 0};
const handler = {
    set: function(target, prop, value, receiver){
        console.log(`[set]: ${prop}`);
        // target[prop] = value;
        throw new Error('Cannot Edit prop');
    },
    get: function(target, prop, receiver){
        console.log(`[get]: ${prop}`);
        console.log('receiver: ', receiver);
        return target[prop];
    },
    deleteProperty: function(target, prop){
        console.log(`[delete]: ${prop}`);
        delete target[prop];
    }
}
const pxy = new Proxy(targetObj, handler);
// pxy.a = 1;

pxy.a;

delete pxy.a;

const objBox = {
    funcA: () => {
        console.log("funcA");
    },
    funcB: () => {
        return "funcB";
    },
    funcC: function(){
        console.log("funcC");
    },
    funcD: function(){
        return "funcD";
    }
}

objBox.funcA();
const b = objBox.funcB;
console.log(b);
objBox.funcC();
const d = objBox.funcD;
console.log(d);
