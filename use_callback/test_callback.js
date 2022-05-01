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

function sayTwiceInput(func){
    func('Hello,');
    func('World');
}

sayTwiceInput(sayInput);

sayTwiceInput(function(tetete){
    console.log(tetete + tetete);
});

setTimeout(sayHello, 2000);