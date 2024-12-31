"use strict";
const startPoint = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((_, i) => String.fromCharCode(startPoint + i));
const excludeProps = ['A', 'C', 'E', 'G', 'H', 'G', 'Z'].filter(data => data != 'G');
const filteredAlphabets = alphabets.filter(alphabet => !excludeProps.includes(alphabet));
console.log(filteredAlphabets);
const mapedAlphabets = filteredAlphabets.map(data => data + ',');
let queryText = 'select * from XXXXX where ';
filteredAlphabets.forEach((data) => {
    queryText += data + ' is not null and ';
});
console.log(queryText.slice(0, queryText.length - 5) + ';');
console.log(mapedAlphabets);
const textUpdate = 'update XXXXX set dataA = "12345" where dataB = "12345"';
