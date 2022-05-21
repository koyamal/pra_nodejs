function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log('hello ' + this.name);
}

const bob = new Person('Bob', 18);
console.log(bob);
bob.hello();
console.log(bob instanceof Person);
console.log(bob.__proto__ === Person.prototype);

const tom = new Person('Tom', 24);
console.log(tom);
tom.hello();

const sun = new Person('Sun', 54);
console.log(sun);
sun.hello();