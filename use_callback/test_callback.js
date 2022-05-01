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

sayTwiceInput(sayInput);

sayTwiceInput(function(msg){
    console.log(msg + msg);
});

sayTwiceInput(sayInputThree);

setTimeout(sayHello, 2000);