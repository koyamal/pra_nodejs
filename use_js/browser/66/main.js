window.name = 'John';

const person = {
    name: 'Tom',
    hello: function(){
        console.log('Hello ' + this.name);
    }
}

person.hello();

const personArrow = {
    name: 'Tom',
    hello: () => {
        console.log('Hello ' + this.name);
    }
}

personArrow.hello();

const a = () =>{
    console.log('Bye ' + this.name);
}

const c = function(){
    console.log('See you ' + this.name);
}

const person2 = {
    name: 'Tom',
    hello(){
        console.log('Hello ' + this.name);
        a();
        c();
        const d = () =>{
            console.log('Good bye ' + this.name);
        }
        d();
    }
}

person2.hello();