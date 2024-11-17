"use strict";
const arrayData = [1, 2, 3];
console.log(...arrayData);
const objData = { one: "one", two: "two", three: "three" };
console.log(Object.assign({ four: "four" }, objData));
const outputData = [
    ...[1, 2, 3],
    4
];
console.log(outputData);
