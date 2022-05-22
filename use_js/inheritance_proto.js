function Creature(size){
    this.size = size;
}

function Person(name, age, size){
    Creature.call(this, size);
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log('ProtoProperty: hello' + this.name);
}

function Japanese(name, age, size, gender){
    Person.call(this, name, age, size);
    this.gender = gender;
}

Person.prototype = Object.create(Creature.prototype);
Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function(){
    console.log('Kon' + this.name);
}

Japanese.prototype.bye = function(){
    console.log('Sayo' + this.name);
}

const taro = new Japanese('Taro', 43, 's' ,'man');
console.log(taro);
taro.hello();
taro.bye();
