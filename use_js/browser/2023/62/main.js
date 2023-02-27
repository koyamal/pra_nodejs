window.name = 'Tom';

const person = {
    name: 'Boby',
    hello: function(){
        console.log('Hello ', this.name);
    }
};

function fn(ref){
    ref();
}

fn(person.hello);