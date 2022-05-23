const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
}

Object.prototype.method = function(){}
Object.defineProperty(Object.prototype, 'method', {
    enumerable: false
});

Object.prototype.method2 = function(){}

console.log('~~~~all enumerable property~~~~');
for(let key in obj){
    console.log(key, obj[key]);
}

console.log('~~~~hasOwnProperty~~~~');
for(let key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key, obj[key]);
    }
}