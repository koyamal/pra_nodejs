class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    hello(){
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person{
    constructor(name, age, gender){
        super(name, age);
        this.gender = gender;
    }

    hello(){
        super.hello();
        console.log('kon ' + this.name);
    }

    bye(){
        console.log('Sayo ' + this.name);
    }
}

const bob = new Japanese('Bob', 34, 'Male');
console.log(bob);
bob.hello();
bob.bye();