const person = {
    name: 'Tom',
    hello: function(){
        console.log('Hello ' + this.name);
        console.log('hello ' + person.name);
    }
}

person.hello();