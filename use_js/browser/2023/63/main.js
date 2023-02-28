window.name = 'Tom';

const person = {
    name: 'Boby',
    hello: function(){
        console.log('Hello ', this.name);
    }
};

const helloBoby = person.hello.bind(person);

function fn(ref){
    ref();
}

fn(helloBoby);

function a(){
    console.log('Hello ' , this.name);
}

b = a.bind({name: 'Jhon'});
b();

function c(name){
    console.log('C Hello ' , name);
}

d = c.bind(null, 'Caddy');
d('Tom');