new Promise(function(resolve, reject){
    console.log('Promise');
    resolve();
    // reject();
}).then(function(){
    console.log('then');
    throw new Error();
}).then(function(){
    console.log('then2');
}).catch(function(){
    console.log('catch');
})

console.log('global end');