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
const cat = Object.create(animal);
cat.name = 'Tama';
cat.printHello();
const tree = Object.create(animal);
tree.name = 'Kashi';
tree.isPlant = true;
tree.printHello();
console.log(tree);
Object.defineProperties(tree, {
    price: {
        value: 420,
        writable: true,
    },
});
console.log(tree.price);
Object.defineProperties(tree, {
    taxedPrice: {
        value: 420 * 1.1,
        writable: false,
    },
});
tree.price = 600;
console.log(tree.price);
// tree.taxedPrice = 600 * 1.1; // エラーになる
console.log(tree.taxedPrice);
const originValue = {
    maxInstances: 5,
    minInstances: 2,
    value: 12
};
const { maxInstances, minInstances } = originValue;
console.log(maxInstances);
