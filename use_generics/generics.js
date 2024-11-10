"use strict";
const test = (arg) => {
    return arg;
};
const test2 = (arg) => {
    return arg.name;
};
console.log(test(1));
console.log(test("hello"));
console.log(test(1));
console.log(test("hello"));
console.log(test2({ name: "name", age: 23 }));
