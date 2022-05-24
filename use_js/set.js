const s = new Set();
const key1 = {};
const key2 = function(){};
s.add(key1);
s.add(key1);
s.add({});
s.add(key2);

for(let k of s){
    console.log(k);
}