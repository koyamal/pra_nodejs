function a(){
    console.log('this is a');
}

a.prop = 0;
a.method = function(){
    console.log('this is a.method');
}

a();
a.method();
console.log(a.prop);