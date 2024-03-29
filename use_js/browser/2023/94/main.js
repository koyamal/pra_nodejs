class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    hello(person){
        console.log(`${this.name} says hello ${person.name}.`);
        return this;
    }

    introduce(){
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
        return this;
    }

    shakeHands(person){
        console.log(`${this.name} shake hangs with ${person.name}.`);
        return this;
    }

    bye(person){
        console.log(`Goodbye, ${person.name}.`);
        // return this;
        return person;
    }
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

// bob.hello(tim);
// bob.introduce();
// bob.shakeHands(tim);
// bob.bye(tim);

bob.hello(tim)
.introduce()
.shakeHands(tim)
.bye(tim)
.hello(tim);