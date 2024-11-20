"use strict";
const arrayData = [1, 2, 3];
console.log(...arrayData);
const objData = { one: "one", two: "two", three: "three" };
console.log(Object.assign({ four: "four" }, objData));
const flag = Math.random() > 0.5 ? true : false;
const outputData = [
    ...[1, 2, 3],
    4,
    ...(flag ? [5, 6, 7] : [])
];
console.log(outputData);
outputData.forEach((data) => {
    console.log(data);
});
const filteredList = outputData.filter((data) => {
    return data % 2 === 0;
});
console.log(filteredList);
const isFanc = () => { };
console.log(isFanc && "hello");
if (isFanc) {
    console.log("hello");
}
