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