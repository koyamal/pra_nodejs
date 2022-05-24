const map = new Map();
const key1 = {};
map.set(key1, 'value1');
console.log(map.get(key1)); //value1
console.log(map.get({})); //undefined

const key2 = function(){}
map.set(key2, 'value2');
console.log(map.get(key2)); //value2

const key3 = 0;
map.set(key3, 'value3');
console.log(map.get(key3)); //value3
console.log(map.get(0)); //value3

for(const m of map){
    console.log(m);
}