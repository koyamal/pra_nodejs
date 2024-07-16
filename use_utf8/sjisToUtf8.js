const Encoding = require('encoding-japanese');

/**
 * SJISで'つくえ'の配列
 * 10進数→16進数へ変換すると[82, C2, 82, AD, 82, A6]
 * 82C2が”つ”, 82ADが"く"、82A6が"え"
 */
const sjisArray = [
  130, 194, 130, 173, 130, 166
];

const unicodeArray = Encoding.convert(sjisArray, {
  to: 'UNICODE',
  from: 'SJIS'
});

/**
 * unicodeArray = [12388, 12367, 12360]
 * unicodeにはNoがあり、12388が”つ”、12367が"く"、12360が"え"
 */
console.log(unicodeArray);

const str = Encoding.codeToString(unicodeArray); // 文字コード値の配列から文字列に変換
console.log(str); // 'つくえ'