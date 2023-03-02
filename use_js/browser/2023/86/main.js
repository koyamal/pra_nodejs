function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function(){
    console.log('Person: hello ' + this.name);
}
