global.name = 'Global';
this.name = 'Global';

const person = {
    name: 'Person',
    hello: function(){
        console.log('Hello ' + this.name);
    }
}

const personArrow = {
    name: 'Person Arrow',
    hello: () => {
        console.log('Hello ' + this.name);
    }
}

person.hello();
personArrow.hello();

const b = person.hello;
b();