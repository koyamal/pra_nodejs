"use strict";
const getTwoDArray = (items) => {
    const twoDArray = [];
    for (let i = 0; i < items.length; i += 20) {
        twoDArray.push(items.slice(i, i + 20));
    }
    return twoDArray;
};
const items = [...Array(50)].map((_, i) => {
    return i;
});
items.push(0);
const filteredItems = items.filter(item => item);
const twoDArray = getTwoDArray(items);
console.log("twoDArray", twoDArray);
console.log("items", items);
console.log("filteredItems", filteredItems);
