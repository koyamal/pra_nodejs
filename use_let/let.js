"use strict";
const dataBox = [1, 2, 3];
// constの配列に要素を追加していく。
const constBox = [];
dataBox.forEach(data => {
    constBox.push(data);
});
console.log(constBox);
// letの配列に要素を追加していく。
let letBox = [];
dataBox.forEach(data => {
    letBox.push(data);
});
console.log(letBox);
