function sleep(val){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(val++);
            resolve(val);
        }, 1000);
    });
}

sleep(0).then(function(val){
    return sleep(val);
}).then(function(val){
    return sleep(val);
}).then(function(val){
    return sleep(val);
}).then(function(val){
    return sleep(val);
}).then(function(val){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('test');
            //resolve(val);
            resolve(100);
        }, 2000);
    });
}).then(function(val){
    return sleep(val);
})