const map = new Map();
const key1 = {};

map.set(key1, 'value1');
console.log(map.get(key1));

const key2 = function(){}
map.set(key2, 'value2');
console.log(map.get(key2));

map.set(0, 'value3');
console.log(map.get(0));


map.delete(0);

console.log(map);

for(const m of map){
    console.log(m);
}

console.log('======set======')

const s = new Set();
s.add(key1);
s.add(key1);
s.add(key2);
s.add(0);

for(let k of s){
    console.log(k);
}