console.log('=======3.92=======');
for(let i = 0; i < 16; i++) {
  console.log(Math.floor(Math.random() * 100 / 3.92));
}

console.log('=======0.392=======');
const arraybox = [];
for(let i = 0; i < 1000; i++) {
  arraybox.push(Math.floor(Math.random() * 100 / 0.392));
}

console.log('min:', Math.min(...arraybox));
console.log('max:', Math.max(...arraybox));
export {};