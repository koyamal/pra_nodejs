function a(){
    console.log("function");
}

a.prop = 2;

a.method = function(){
    console.log("method");
}

a();
a.method();
console.log(a.prop);