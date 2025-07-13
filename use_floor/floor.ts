const randomCount = 1000;

const createRandomArray = (divValue: number) => {
  const arrayBox = [];
  for(let i = 0; i < randomCount; i++) {
    arrayBox.push(Math.floor(Math.random() * 100 / divValue));
  }
  return arrayBox;
}

console.log('=======39.2=======');
const arraybox3920 = createRandomArray(39.2);
console.log('min:', Math.min(...arraybox3920));
console.log('max:', Math.max(...arraybox3920));

console.log('=======3.92=======');
const arraybox392 = createRandomArray(3.92);
console.log('min:', Math.min(...arraybox392));
console.log('max:', Math.max(...arraybox392));

console.log('=======0.392=======');
const arraybox0392 = createRandomArray(0.392);
console.log('min:', Math.min(...arraybox0392));
console.log('max:', Math.max(...arraybox0392));

console.log('=======0.0392=======');
const arraybox00392 = createRandomArray(0.0392);
console.log('min:', Math.min(...arraybox00392));
console.log('max:', Math.max(...arraybox00392));

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomInMax = (min: number, max: number) => max * max * (Math.floor(Math.random() * (max - min + 1)) + min);

console.log(getRandomInt(10, 13));
console.log(getRandomInMax(100, 130));

const getRandomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

getRandomFloat(1, 2);
console.log(getRandomFloat(2, 4));

const getRandomRGBColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return {r, g, b};
}

const consoleWithColor = (msg: string, r: number, g: number, b: number) => {
  console.log(`\x1b[38;2;${r};${g};${b}m${msg}\x1b[0m`);
}

const consoleMsgWithRandomColor = (msg: string) => {
  const {r, g, b} = getRandomRGBColor();
  console.log(`\x1b[38;2;${r};${g};${b}m${msg}\x1b[0m`);
}

const {r, g, b} = getRandomRGBColor();
console.log(getRandomRGBColor());
console.log(`\x1b[38;2;${r};${g};${b}mこの文字はRGB色付きです\x1b[0m`);
consoleWithColor('何色？', r, g, b);

consoleMsgWithRandomColor('何色？');
consoleMsgWithRandomColor('これは何色？');
export {};