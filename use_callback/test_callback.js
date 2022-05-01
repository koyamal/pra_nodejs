function sayHello(){
    console.log('Hello');
}

function sayTwice(func){
    func();
    func();
}

sayTwice(sayHello);

setTimeout(sayHello, 2000);