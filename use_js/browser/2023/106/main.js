const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
}

Object.prototype.method = function(){};
Object.defineProperty(Object.prototype, 'method', {
    enumerable: false
});

Object.defineProperty(obj, 'prop2', {
    enumerable: false
});

for(let key in obj){
    console.log(key, obj[key]);
}

