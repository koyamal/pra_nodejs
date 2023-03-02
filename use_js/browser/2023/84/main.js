function Person(name, age){
    this.name = name;
    this.age = age;
    // this.hello = function(){
    //     console.log('OwnProperty: hello ' + this.name);
    // }
}

Person.prototype.hello = function(){
    console.log('Person: hello ' + this.name);
}

Object.prototype.hello = function(){
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
bob.hello();


console.log(bob.hasOwnProperty('hello'));
console.log(bob.hasOwnProperty('name'));

console.log('hello' in bob);
console.log('name' in bob);