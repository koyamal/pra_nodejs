function sayHello(){
    console.log('Hello');
}

function sayTwiceHello(func){
    func();
    func();
}

function sayInput(msg){
    console.log(msg);
}

function sayTwiceInput(func){
    func('Hello,');
    func('World');
}

sayTwiceHello(sayHello);
sayTwiceInput(sayInput);
setTimeout(sayHello, 2000);