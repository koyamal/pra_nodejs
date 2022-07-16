function F(a, b){
    this.a = a;
    this.b = b;
    // return 1
    return {a: 100}
}

F.prototype.c = function(){}

function newOpe(C, ...args){
    const _this = Object.create(C.prototype);
    const result = C.apply(_this, args);
    // console.log(result, _this);
    if(typeof result === "object" && result !== null){
        return result;
    }
    
    return _this;
}

// const instance = new F(1, 2);
const instance = newOpe(F, 1, 2);
console.log(instance);