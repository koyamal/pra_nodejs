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

function Japanese(name, age, gender){
    this.gender = gender;
    Person.call(this, name, age);
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.bye = function(){
    console.log('Japanese: さようなら ' + this.name);
}

taro = new Japanese('taro', 33, 'Male');
console.log(taro);
taro.hello();
taro.bye();