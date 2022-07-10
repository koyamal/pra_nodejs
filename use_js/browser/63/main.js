window.name = 'John';
const person = {
    name: 'Tom',
    hello: function(){
        console.log('Hello ' + this.name);
    }
}

const dog = {
    name: 'pochi',
}

person.hello();

const helloTom = person.hello.bind(person);
const helloPochi = person.hello.bind(dog);
function fn(ref){
    ref();
}

fn(helloTom);
fn(helloPochi);

function a(){
    console.log('hello ' + this.name);
}

const b = a.bind({name: 'Tim'});
b();

function c(name){
    console.log('hello ' + name);
}

const d = c.bind(null, 'Jhon');
d('Goege');