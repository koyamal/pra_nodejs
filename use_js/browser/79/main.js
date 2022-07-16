function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log('hello ' + this.name);
}

const bob = new Person('Bob', 19);
const tom = new Person('Tom', 32);
const sun = new Person('Sun', 32);

bob.hello();

console.log(Person.prototype === bob.__proto__);