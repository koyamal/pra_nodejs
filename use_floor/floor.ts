console.log('=======3.92=======');
const arraybox392 = [];
for(let i = 0; i < 1000; i++) {
  arraybox392.push(Math.floor(Math.random() * 100 / 3.92));
}
console.log('min:', Math.min(...arraybox392));
console.log('max:', Math.max(...arraybox392));

console.log('=======0.392=======');
const arraybox0392 = [];
for(let i = 0; i < 1000; i++) {
  arraybox0392.push(Math.floor(Math.random() * 100 / 0.392));
}

console.log('min:', Math.min(...arraybox0392));
console.log('max:', Math.max(...arraybox0392));

console.log('=======0.0392=======');
const arraybox00392 = [];
for(let i = 0; i < 10000; i++) {
  arraybox00392.push(Math.floor(Math.random() * 100 / 0.0392));
}

console.log('min:', Math.min(...arraybox00392));
console.log('max:', Math.max(...arraybox00392));

export {};