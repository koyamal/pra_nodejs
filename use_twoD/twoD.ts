const getTwoDArray = (items: Number[]): Number[][] => {
  const twoDArray = [];
  for (let i = 0; i < items.length; i += 20) {
    twoDArray.push(items.slice(i, i + 20));
  }
  return twoDArray;
}

const items = [...Array(50)].map((_, i) => {
  return i;
});

const twoDArray = getTwoDArray(items);

console.log(twoDArray);