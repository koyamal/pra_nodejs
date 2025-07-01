"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('=======39.2=======');
const arraybox3920 = [];
for (let i = 0; i < 10000; i++) {
    arraybox3920.push(Math.floor(Math.random() * 100 / 39.2));
}
console.log('min:', Math.min(...arraybox3920));
console.log('max:', Math.max(...arraybox3920));
console.log('=======3.92=======');
const arraybox392 = [];
for (let i = 0; i < 10000; i++) {
    arraybox392.push(Math.floor(Math.random() * 100 / 3.92));
}
console.log('min:', Math.min(...arraybox392));
console.log('max:', Math.max(...arraybox392));
console.log('=======0.392=======');
const arraybox0392 = [];
for (let i = 0; i < 10000; i++) {
    arraybox0392.push(Math.floor(Math.random() * 100 / 0.392));
}
console.log('min:', Math.min(...arraybox0392));
console.log('max:', Math.max(...arraybox0392));
console.log('=======0.0392=======');
const arraybox00392 = [];
for (let i = 0; i < 10000; i++) {
    arraybox00392.push(Math.floor(Math.random() * 100 / 0.0392));
}
console.log('min:', Math.min(...arraybox00392));
console.log('max:', Math.max(...arraybox00392));
let rand = Math.random();
console.log(rand);
let num = Math.floor(Math.random() * 10);
console.log(num);
const colors = ['red', 'blue', 'green'];
const indexColor = Math.floor(Math.random() * colors.length);
const randomColor = colors[indexColor];
console.log(`${indexColor}: ${randomColor}`);
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10, 13));
console.log(getRandomInt(100, 130));
const getRandomRGBColor = () => {
    const r = Math.floor(Math.random() * 256); // 0〜255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
};
const consoleWithColor = (msg, r, g, b) => {
    console.log(`\x1b[38;2;${r};${g};${b}m${msg}\x1b[0m`);
};
const { r, g, b } = getRandomRGBColor();
console.log(getRandomRGBColor());
console.log(`\x1b[38;2;${r};${g};${b}mこの文字はRGB色付きです\x1b[0m`);
consoleWithColor('hello', r, g, b);
