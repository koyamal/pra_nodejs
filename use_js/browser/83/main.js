function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log('hello ' + this.name);
}

const bob = new Person('bob', 18);
bob.hello();