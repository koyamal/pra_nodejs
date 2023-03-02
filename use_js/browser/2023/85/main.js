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

function Japanese(name, age){
    Person.call(this, name, age);
}

Japanese.prototype = Object.create(Person.prototype);

taro = new Japanese('taro', 33);
console.log(taro);
taro.hello();