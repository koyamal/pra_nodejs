class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    hello(){
        console.log('Person: hello ' + this.name);
    }
}

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.hello = function(){
//     console.log('Person: hello ' + this.name);
// }

const bob = new Person('bob', 32);
console.log(bob);