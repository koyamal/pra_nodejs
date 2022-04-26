function promiseResolve() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('resoleve called');
        }, 1600);
    });
}

promiseResolve().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
});

function promiseReject(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject(new Error('reject called'))
        });
    });
}

promiseReject().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
});