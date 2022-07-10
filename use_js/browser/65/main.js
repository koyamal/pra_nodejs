function a(name){
    return 'hello ' + name;
}

const b = function(name){
    return 'hello ' + name;
}

const c = name => 'hello ' + name;
console.log(c('Tom'));

const d = (name1, name2) => 'hello ' + name1 + ' ' + name2;
console.log(d('Tom', 'Bob'));

