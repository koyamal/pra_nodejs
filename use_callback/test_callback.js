function sayHello(){
    console.log('Hello');
}

function sayTwiceHello(func){
    func();
    func();
}

sayTwiceHello(sayHello);

function sayInput(msg){
    console.log(msg);
}

function sayInputThree(msg){
    console.log(msg + msg + msg);
}

function sayTwiceInput(func){
    func('Hello,');
    func('World');
}

function sayTripleInput(func){
    func('One');
    func('Two');
    func('Three');
}

sayTwiceInput(sayInput);

sayTwiceInput(function(msg){
    console.log(msg + msg);
});

sayTwiceInput(sayInputThree);

setTimeout(sayHello, 2000);

setTimeout(sayTripleInput, 1000, sayInput);