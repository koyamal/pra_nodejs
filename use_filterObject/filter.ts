const startPoint = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((_, i) => String.fromCharCode(startPoint + i));

const excludeProps = ['A', 'C', 'E', 'G', 'H', 'G', 'Z'].filter(data => data != 'G');

const filteredAlphabets = alphabets.filter(alphabet => !excludeProps.includes(alphabet));

console.log(filteredAlphabets);

const mapedAlphabets = filteredAlphabets.map(data => data + ',');

let outputText = 'select * from XXXXX where ';
filteredAlphabets.forEach((data) => {
  outputText += data + ' is not null and ';
});

console.log(outputText.slice(0, outputText.length - 5) + ';');

console.log(mapedAlphabets);

const textUpdate = 'update XXXXX set dataA = "12345" where dataB = "12345"';