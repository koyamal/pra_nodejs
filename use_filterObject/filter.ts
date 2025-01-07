const startPoint = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((_, i) => String.fromCharCode(startPoint + i));

const excludeProps = ['A', 'C', 'D', 'E', 'G', 'H', 'G', 'Z'].filter(data => data != 'G').filter(data => data != 'C');
excludeProps.forEach(data => {
  console.log(data);
});

const filteredAlphabets = alphabets.filter(alphabet => !excludeProps.includes(alphabet));

console.log(filteredAlphabets);

const mapedAlphabets = filteredAlphabets.map(data => data + ',').map(data => data + ' ').map(data => data + '/');

let outputText = 'Output Filtered Alphabets are ';
filteredAlphabets.forEach(data => {
  outputText += data + ', ';
  console.log(data);
});

console.log(outputText);

console.log(outputText.slice(0, outputText.length - 2) + ';');

console.log(mapedAlphabets);