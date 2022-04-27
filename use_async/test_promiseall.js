var taskA = new Promise(function(resolve, reject) {
    setTimeout(function () {
        var a = new Date();
        console.log(a.getTime());
        console.log('taskA');
        resolve();
    }, 117);
  });
  
  var taskB = new Promise(function(resolve, reject) {
    setTimeout(function () {
        var b = new Date();
        console.log(b.getTime());
        console.log('taskB');
        resolve();
    }, 111);
  });
  
  var before = new Date();
  Promise.all([taskA, taskB]).then(function () {
    var after = new Date();
    var result = after.getTime() - before.getTime();
    console.log(result);
  });