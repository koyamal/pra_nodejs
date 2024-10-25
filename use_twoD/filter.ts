const items = [...Array(50)].map((_, i) => {
  if(i % 7 === 0) return 0;
  return i;
});

items.push(0);

console.log("items", items);

const filteredItems = items.filter(item => item);
console.log("filteredItems", filteredItems);

export {}