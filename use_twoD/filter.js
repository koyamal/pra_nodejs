"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = [...Array(50)].map((_, i) => {
    if (i % 7 === 0)
        return "";
    return i.toString();
});
items.push("");
console.log("items", items);
const filteredItems = items.filter(item => item);
console.log("filteredItems", filteredItems);
