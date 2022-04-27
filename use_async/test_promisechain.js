Promise.resolve()
.then(function () {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('taskA');
            resolve('taskA fin');
        }, 4000);
    });
})
.then(function(value) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('taskB start');
            console.log(value); //taskA fin
            console.log('taskB');
            resolve('taskB fin');
        }, 4000);
    });
})
.then(function (value) {
    console.log('then');
    console.log(value); //taskB fin
}).catch(function (error) {
    console.log(error);
});