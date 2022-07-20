function Person(name, age){
    this.name = name;
    this.age = age;
    // this.hello = function(){

    // }
}

// Person.prototype.hello = function(){

// }

Object.prototype.hello = function(){
    console.log('Object: hello ' + this.name);
}

const bob = new Person('bob', 18);
const result = bob.hasOwnProperty('name');
console.log(result);

const result2 = bob.hasOwnProperty('hello');
console.log(result2);

console.log('name' in bob);
console.log('hello' in bob);