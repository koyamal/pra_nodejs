var taskA = new Promise(function(resolve, reject) {
  setTimeout(function () {
    console.log('taskA');
    resolve();
  }, 360);
});
  
var taskB = new Promise(function(resolve, reject) {
  setTimeout(function () {
    console.log('taskB');
    resolve();
  }, 1);
});
  
var before = new Date();
Promise.race([taskA, taskB]).then(function () {
  var after = new Date();
  var result = after.getTime() - before.getTime();
  console.log(result);
}).catch(function () {
  console.log('error');
});
  