function a(){
    console.log('called');
}
a();

(function(){
    console.log('called');
})();

let b = function(){
    console.log('called');
    return 0;
}();

console.log(b);

let c = (function(d){
    console.log(d);
})(10);