"use strict";
const startPoint = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((_, i) => {
    return String.fromCharCode(startPoint + i);
});
const excludeProps = ['A', 'C', 'E', 'G', 'H', 'G', 'Z'];
const filteredAlphabets = alphabets.filter(alphabet => !excludeProps.includes(alphabet));
console.log(filteredAlphabets);
const mapedAlphabets = filteredAlphabets.map((data) => {
    return data + ',';
});
let queryText = 'select from XXXXX';
filteredAlphabets.forEach((data) => {
    queryText += data + ' != null,';
});
console.log(queryText);
console.log(mapedAlphabets);
