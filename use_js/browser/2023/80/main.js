function F(a, b){
    this.a = a;
    this.b = b;
    return {};
}

const instanceF = new F(1, 2);
console.log(instanceF);


function F2(a, b){
    this.a = a;
    this.b = b;
    return 1;
}

const instanceF2 = new F2(1, 2);
console.log(instanceF2);


function F3(a, b){
    this.a = a;
    this.b = b;
}

const instanceF3 = new F3(1, 2);
console.log(instanceF3);



function FF(a, b){
    this.a = a;
    this.b = b;
}

function opeFF(C, ...args){
    const _this = Object.create(C.prototype);
    console.log(_this);
    const result = C.apply(_this, args);
    console.log(_this);
}

opeFF(FF, 1, 2);