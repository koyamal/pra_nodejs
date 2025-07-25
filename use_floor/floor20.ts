const createRandomArray = (divValue: number, randomCount: number) => {
  const arrayBox = [];
  for(let i = 0; i < randomCount; i++) {
    arrayBox.push(Math.floor(Math.random() * 100 / divValue));
  }
  return arrayBox;
}

const createRandomArrayWithConsole = (divValue: number, randomCount: number) => {
  console.log(`=======${divValue}=======`);
  const arrayRandom = createRandomArray(divValue, randomCount);
  console.log('min:', Math.min(...arrayRandom));
  console.log('max:', Math.max(...arrayRandom));
}
createRandomArrayWithConsole(39.2, 1000);
createRandomArrayWithConsole(3.92, 1000);
createRandomArrayWithConsole(0.392, 10000);
createRandomArrayWithConsole(0.0392, 10000);
createRandomArrayWithConsole(0.00392, 100000);

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