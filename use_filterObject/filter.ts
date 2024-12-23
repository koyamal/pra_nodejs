const excludeProps = ['A', 'C', 'E', 'G', 'H'];

const c = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((v, i) => {
  return String.fromCharCode(c + i);
});

console.log(alphabets);