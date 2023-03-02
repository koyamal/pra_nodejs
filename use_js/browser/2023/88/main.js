class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    hello(){
        console.log('Person: hello ' + this.name);
    }
}

class Japanese extends Person{
    constructor(name, age, gender){
        super(name, age);
        this.gender = gender
    }

    hello(){
        console.log('Japanese: こんにちは ' + this.name);
        super.hello();
    }

    bye(){
        console.log('Japanese: さようなら ' + this.name);
    }
}

const taro = new Japanese('taro', 23, 'Male');
console.log(taro);
taro.hello();
taro.bye();
