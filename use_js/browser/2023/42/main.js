function hello(name){
    name = name || 'Tom';
    console.log('hello', name);
}

hello('Jhon');
hello();

let name = '';

name && hello(name);