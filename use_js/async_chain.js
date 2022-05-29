function sleep(callback, val){
    setTimeout(function(){
        console.log(val++);
        callback(val);
    }, 1000);
}

sleep(function(val){
    console.log('callback done');
    sleep(function(val){
        console.log('callback done');
        sleep(function(val){
            console.log('callback done');
        }, val);
    }, val);
}, 0);