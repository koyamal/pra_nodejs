const Encoding = require('encoding-japanese');

const orignText = 'お';

// 文字列をunicode(10進数)へ変換
const unicodeArray = Encoding.stringToCode(orignText);
console.log(`"${orignText}"のunicode(10進数): `, unicodeArray);

// unicode(10進数)をunicode(16進数)へ変換
const unicodeArrayHex = unicodeArray.map(unicodeNumber => unicodeNumber.toString(16));
console.log(`"${orignText}"のunicode(16進数): `, unicodeArrayHex);

// unicode(10進数)をunicode(2進数)へ変換
const unicodeArrayBinary = unicodeArray.map(unicodeNumber => unicodeNumber.toString(2));
console.log(`"${orignText}"のunicode(2進数): `, unicodeArrayBinary);

const textBinary = unicodeArrayBinary[0];
const textBinary_fix = '0000' + textBinary;
const textBinary16 = textBinary_fix.slice(textBinary_fix.length - 16);
console.log(textBinary16);

const first = textBinary16.slice(0, 4);
const second = textBinary16.slice(4, 10);
const third = textBinary16.slice(10);
console.log(first, second, third);

// utf-8へ変換するために定数(e0, 80, 80)を加える
const addNumberHex = ['e0', '80', '80'];
const addNumberBinary = addNumberHex.map(hex => parseInt(hex, 16).toString(2));
console.log(addNumberBinary);

const calBinaryReturnHex = (a, b) => {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(16);
}

console.log(calBinaryReturnHex('0011', '11100000'));
console.log(calBinaryReturnHex('000001', '10000000'));
console.log(calBinaryReturnHex('001010', '10000000'));