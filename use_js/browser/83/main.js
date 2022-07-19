function Person(name, age){
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log('OwnProperty: hello ' + this.name); //first order
    }
}

Person.prototype.hello = function(){
    console.log('Person: hello ' + this.name); //second order
}

Object.prototype.hello = function(){
    console.log('Object: hello ' + this.name); //third order
}

const bob = new Person('bob', 18);
bob.hello();

const result = bob.hasOwnProperty('name');
console.log(result);