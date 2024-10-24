"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = [...Array(50)].map((_, i) => {
    return i.toString();
});
items.push("");
const filteredItems = items.filter(item => item);
console.log(filteredItems);
