const person = {
    name: 'Bob',
    hello: function(){
        console.log('Hello,' + this.name);
    }
}

person.hello();

const ref = person.hello;
ref();