function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log('Hello, ', this.name);
}


const bob = new Person('Bob', 19);
const jhon = new Person('Jhon', 23);

bob.hello();