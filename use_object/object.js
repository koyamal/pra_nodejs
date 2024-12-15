"use strict";
const constParams = {};
Object.assign(constParams, { a: 'valueA', b: 'valueB' });
Object.assign(constParams, { c: 'valueC', d: { e: 'valueE', f: 'valueF' } });
console.log(constParams);
const animal = {
    isPlant: false,
    name: '',
    printHello: function () {
        console.log(`Hello, I'm ${this.name}.` + (this.isPlant ? 'Plant.' : 'Not Plant'));
    }
};
const dog = Object.create(animal);
dog.name = 'Taro';
dog.printHello();
console.log(dog);
const cat = Object.create(animal);
cat.name = 'Tama';
cat.printHello();
console.log(cat);
const tree = Object.create(animal);
tree.isPlant = true;
