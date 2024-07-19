/**
 * unicodeのコードポイントをutf-8へ変換する
 * 
 * 流れ：
 * (文字列をunicodeのコードポイントへ変換する)
 * unicodeのコードポイントを2進数に変換する
 * 2進数を4,6,6ビットに分割する
 * 分割した各値に定数(e0,80,80)を加える
 * 16進数に変換する
 */
const Encoding = require('encoding-japanese');

// utf-8へ変換したい文字列
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

// 先頭から4(値によっては3桁とか2桁とかになるかも),6,6ビットに分割する utf-8への変換方法で決まってる。
const dividedUnicodeArrayBinary = unicodeArrayBinary.map((unicodeBinary) => {
  const first = unicodeBinary.slice(0, unicodeBinary.length -12);
  const second = unicodeBinary.slice(unicodeBinary.length -12, unicodeBinary.length -6);
  const third = unicodeBinary.slice(unicodeBinary.length -6);
  return [first, second, third];
});

// unicodeからutf-8へ変換するために分割した各値に定数(e0, 80, 80)を加えるためにバイナリに変換
const addNumberHex = ['e0', '80', '80'];
const addNumberBinary = addNumberHex.map(hex => parseInt(hex, 16).toString(2));

// 2個のバイナリ(文字列)の和を16進数で返す
const calBinaryReturnHex = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(16);

// unicodeからutf-8へ変換するために分割した各値に定数(e0, 80, 80)のバイナリを加える
const utf8ArrayHex = dividedUnicodeArrayBinary.map(dividedUnicodeBinary => {
  const first = calBinaryReturnHex(dividedUnicodeBinary[0], addNumberBinary[0]);
  const second = calBinaryReturnHex(dividedUnicodeBinary[1], addNumberBinary[1]);
  const third = calBinaryReturnHex(dividedUnicodeBinary[2], addNumberBinary[2]);

  return first + second + third;
});

console.log(`"${orignText}"のutf-8(16進数): `, utf8ArrayHex);