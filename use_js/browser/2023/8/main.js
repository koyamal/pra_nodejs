let obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: function(){
        console.log("value3");
    }
}

console.log(obj.prop1);
console.log(obj['prop2']);
obj.prop3()