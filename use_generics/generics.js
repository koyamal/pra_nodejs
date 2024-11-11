"use strict";
const test = (arg) => {
    return arg;
};
const test2 = (arg, unit) => {
    console.log(unit);
    return arg.name;
};
console.log(test(1));
console.log(test("hello"));
console.log(test(1));
console.log(test("hello"));
console.log(test2({ name: "name", age: 23 }, "hello"));
console.log(test2({ name: "name", age: 23 }, 23));
