window.name = 'A';

const person = {
    name: 'B',
    hello: function(){
        console.log('Hello ', this.name);
    },
    bye: () =>{
        console.log('Bye ', this.name);
    }
}

person.hello();
person.bye();