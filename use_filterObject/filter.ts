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

let queryText = 'select * from XXXXX where ';
filteredAlphabets.forEach((data) => {
  queryText += data + ' is not null and ';
});

console.log(queryText.slice(0, queryText.length - 5) + ';');

console.log(mapedAlphabets);