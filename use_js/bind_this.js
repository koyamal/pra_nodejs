global.name = 'John';

const person = {
    name: 'Bob',
    hello: function(){
        console.log('Hello,' + this.name);
    }
}

person.hello();

const helloBob = person.hello.bind(person);

function fn(ref){
    console.log('callback is called');
    ref();
}

fn(helloBob);

function a(){
    console.log('hello, ' + this.name);
}

const b = a.bind({name: 'Takeshi'});
b();

a.apply({name: 'apply'}); // a.apply({obj}, [val1, val2,]);
a.call({name: 'call'}); // a.call({obj}, val1, val2, )