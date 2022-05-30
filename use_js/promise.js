new Promise(function(resolve, reject){
    console.log('promise');
    //resolve('hello');
    setTimeout(function(){
        resolve('hello');
    }, 2000);
    //reject('bye');
}).then(function(data){
    console.log('then1: ' + data);
    //throw new Error();
    return data + 'o';
}).then(function(data){
    console.log('then2: ' + data);
    return data + 'o';
}).catch(function(data){
    console.log('catch: ' + data);
}).finally(function(data){
    console.log('finally: ' + data); //finally undefined
})

console.log('global end');