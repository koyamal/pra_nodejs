const moduleA =(function(){
    console.log('IIFE called');

    let privateVal = 1;
    let publicVal = 10;

    function publicFn(){
        console.log('publicFn called: ' + privateVal++);
    }

    function privateFn(){

    }

    return {publicFn, publicVal};
})();

const moduleB = (function(){
    moduleA.publicFn();
    moduleA.publicFn();
    moduleA.publicFn();
    console.log(moduleA.publicVal);
})();

const moduleBB = (function(moduleA){
    moduleA.publicFn();
    moduleA.publicFn();
    moduleA.publicFn();
    console.log(moduleA.publicVal);
})(moduleA);

const moduleBBB = (function({publicVal, publicFn}){
    publicFn();
    publicFn();
    publicFn();
    console.log(publicVal);
})(moduleA);


const moduleBBBB = (function({publicVal: val, publicFn: fn}){
    fn();
    fn();
    fn();
    console.log(val);
})(moduleA);

// moduleA.publicFn();
// moduleA.publicFn();
// moduleA.publicFn();