const person = {
    name: 'Boby',
    hello: function(){
        console.log('Hello ', this.name);
    }
};

person.hello();