function Person1(name, age){
    this._name = name,
    this._age = age;
}

Object.defineProperty(Person1.prototype, 'name', {
    get: function(){
        console.log('hello');
        return this._name;
        // return 'hello, world';
    },
    set: function(val){
        this._name = val;
    }
});

const p1 = new Person1('Bob', 23);
console.log(p1.name);
console.log(p1.name);
console.log(p1.name);

class Person2{
    constructor(name, age){
        this._name = name,
        this._age = age;
    }

    get name(){
        console.log('Hello');
        return this._name;
        // return 'hello, world';
    }

    set name(val){
        this._name = val;
    }

    static hello(){
        console.log('hello hello');
    }
}

const tom = new Person2('tom', 32);
console.log(tom.name);

console.log(tom);
Person2.hello();
tom.constructor.hello();
console.log(tom.constructor === Person2);