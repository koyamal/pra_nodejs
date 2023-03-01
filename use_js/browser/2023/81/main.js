function F(a, b){
    this.a = a;
    this.b = b;
    //return {};
}

F.prototype.c = function(){}

const instance = new F(1, 2);
console.log(instance instanceof F);
console.log(instance.__proto__ === F.prototype);
console.log(instance.__proto__ === Object.prototype);