const map = new Map();
const key1 = {};
const key10 = {};
map.set(key1, 'value1');
console.log(map.get(key1)); //value1
console.log(map.get({})); //undefined

map.set(key10, 'value10');
console.log(map.get(key1)); //value1

const key2 = function(){}
map.set(key2, 'value2');
console.log(map.get(key2)); //value2

const key3 = 0;
map.set(key3, 'value3');
console.log(map.get(key3)); //value3
console.log(map.get(0)); //value3

const key4 = 'keyword';
map.set(key4, 'value4');
const key5 = 'keyword';
map.set(key5, 'value5');

for(const m of map){
    console.log(m);
}



const events = (function() {
	const eventStack = new Map();

	return {
		on(type, fn) {
			const fnStack = eventStack.get(type) || new Set();
			fnStack.add(fn);
			eventStack.set(type, fnStack);
		},
		off(type, fn) {
			const fnStack = eventStack.get(type);
			if(fnStack && fnStack.has(fn)) {
				fnStack.delete(fn);
			}
		},
		emit(type, _this) {
			const fnStack = eventStack.get(type);
			if(fnStack) {
				for(const fn of fnStack) {
					fn.call(_this);
				}
			}
		}
	}
})();

events.on('test', function(){console.log('test1')});
events.on('test', function(){console.log('test2')});
events.emit('test', this);


const setmap = function(map, key, val){
    return map.set(key, val);
}

const map02 = new Map();
setmap(map02, 'tests', 'test01');
console.log(map02);
setmap(map02, 'tests', 'test02');
console.log(map02);

const map03 = new Map();
const set01 = new Set();
set01.add(function(){console.log('set 01')});
map03.set('map03', set01);
console.log(map03.get('map03'));
set01.add(function(){console.log('set 02')});
map03.set('map03', set01);
console.log(map03);
console.log(map03.get('map03'));

const ds = map03.get('map03');
for(d of ds){
    d();
}

