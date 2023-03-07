new Promise(function(resolve, reject){
    console.log('Promise');
    // resolve('hello');
    reject('bye');
}).then(function(data){
    console.log('then: ' + data);
    // throw new Error();
    return data + '!';
}).then(function(data){
    console.log('then2: ' + data);
}).catch(function(data){
    console.log('catch: ' + data);
}).finally(function(){
    console.log('finally');
})

console.log('global end');