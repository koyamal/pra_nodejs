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
