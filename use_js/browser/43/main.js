function hello(name){
    name = name || 'Tom';
    console.log('hello ' + name);
}

hello('Bob');

let name = 'Bob';
if(name){
    hello(name);
}

name && hello();