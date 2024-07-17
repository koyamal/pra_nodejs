const Encoding = require('encoding-japanese');

const orignText = 'お';

// 文字列をunicode(10進数)へ変換
const unicodeArray = Encoding.stringToCode(orignText);
console.log(`${orignText}のunicode(10進数): `, unicodeArray);

// unicode(10進数)をunicode(16進数)へ変換
const unicodeArrayHex = unicodeArray.map(unicodeNumber => unicodeNumber.toString(16));
console.log(`${orignText}のunicode(16進数): `, unicodeArrayHex);
