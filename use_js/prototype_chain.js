function Person(name, age){
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log('OwnProperty: hello ' + this.name);
    }
}

Person.prototype.hello = function(){
    console.log('ProtoProperty: hello' + this.name);
}

Person.prototype.bye = function(){
    console.log('ProtoProperty: bye ' + this.name);
}

Object.prototype.hello = function(){
    console.log('Object: hello ' + this.name);
}

Object.prototype.bye = function(){
    console.log('Object: bye ' + this.name);
}

Object.prototype.hi = function(){
    console.log('Object: hi ' + this.name);
}

bob = new Person('bob', 32);
bob.hello();
bob.bye();
bob.hi();
//bob.seeyou();

console.log(bob.hasOwnProperty('hello')); //true
console.log(bob.hasOwnProperty('bye')); //false
console.log('hello' in bob); //true
console.log('bye' in bob); //true
console.log('hi' in bob); //true