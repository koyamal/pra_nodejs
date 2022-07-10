function a(name1, name2){
    console.log('hello ' + this.name);
    console.log('bye ' + name1, name2);
}

const tim = {
    name: 'Tim'
};

const b = a.bind(tim);
b();

a.apply(tim, ['Bob', 'Jhon']);
a.call(tim, 'Bob', 'Jhon');

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.max.apply(null, [1, 2, 3, 4, 5]))