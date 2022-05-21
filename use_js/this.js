global.name = 'John';

const person = {
    name: 'Bob',
    hello: function(){
        console.log('Hello,' + this.name);
    }
}

person.hello();

// const ref = person.hello;
// ref();

function fn(ref){
    console.log('callback is called');
    ref();
}

fn(person.hello);