const Encoding = require('encoding-japanese');

const sjisArray = [
  130, 194, 130, 173, 130, 166
]; // SJISで'つくえ'の配列
// 10進数→16進数へ変換[82, C2, 82, AD, 82, A6]

const unicodeArray = Encoding.convert(sjisArray, {
  to: 'UNICODE',
  from: 'SJIS'
});
console.log(unicodeArray);
const str = Encoding.codeToString(unicodeArray); // 文字コード値の配列から文字列に変換
console.log(str); // 'つくえ'