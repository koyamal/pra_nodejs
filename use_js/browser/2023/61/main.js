window.name = 'Tom';

const person = {
    name: 'Boby',
    hello: function(){
        console.log('Hello ', this.name);
    }
};

const ref = person.hello;

ref();