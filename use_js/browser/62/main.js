window.name = 'John';
const person = {
    name: 'Tom',
    hello: function(){
        console.log('Hello ' + this.name);
    }
}

person.hello();

function fn(ref){
    ref();
}

fn(person.hello);

window.id = 4;
const obj = {
    id: 3,
    disp: function(){
        console.log('This obj id is ' + this.id);
    }
}
obj.disp();
const d = obj.disp;
d();