/**
 * unicodeのコードポイントをutf-8へ変換する
 */
const Encoding = require('encoding-japanese');

const orignText = 'おに';

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

// 先頭から4(値によっては3桁とか2桁とかになるかも),6,6ビットに分割する
const dividedUnicodeArrayBinary = unicodeArrayBinary.map((unicodeBinary) => {
  const first = unicodeBinary.slice(0, unicodeBinary.length -12);
  const second = unicodeBinary.slice(unicodeBinary.length -12, unicodeBinary.length -6);
  const third = unicodeBinary.slice(unicodeBinary.length -6);
  return [first, second, third];
});

const first = textBinary.slice(0, textBinary.length -12);
const second = textBinary.slice(textBinary.length -12, textBinary.length -6);
const third = textBinary.slice(textBinary.length -6);
console.log(first, second, third);

// utf-8へ変換するために分割した各値に定数(e0, 80, 80)を加える
const addNumberHex = ['e0', '80', '80'];
const addNumberBinary = addNumberHex.map(hex => parseInt(hex, 16).toString(2));
console.log(addNumberBinary);

const calBinaryReturnHex = (a, b) => {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(16);
}

const utf8ArrayHex = dividedUnicodeArrayBinary.map((dividedUnicodeBinary) => {
  const first = calBinaryReturnHex(dividedUnicodeBinary[0], addNumberBinary[0]);
  const second = calBinaryReturnHex(dividedUnicodeBinary[1], addNumberBinary[1]);
  const third = calBinaryReturnHex(dividedUnicodeBinary[2], addNumberBinary[2]);

  return first + second + third;
});

console.log("xxxxx",utf8ArrayHex);

console.log(calBinaryReturnHex('0011', '11100000'));
console.log(calBinaryReturnHex('000001', '10000000'));
console.log(calBinaryReturnHex('001010', '10000000'));