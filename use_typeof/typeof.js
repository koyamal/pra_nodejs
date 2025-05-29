"use strict";
const checkTypeOf = (val) => {
    console.log(`${val}のtypeは${typeof val}です。`);
    return typeof val === 'string';
};
const logKeys = (val) => {
    Object.keys(val).forEach(key => {
        console.log(key, val[key]);
    });
};
const logKeyValue = (val) => {
    Object.keys(val).forEach(key => {
        console.log(key, val[key]);
    });
};
const logValues = (val) => {
    Object.values(val).forEach(value => {
        console.log(value);
    });
};
logKeys({ a: 1, b: 2, c: 3, d: "4" });
logKeys({ a: 1, b: 2, c: 3, d: "4" });
logKeyValue({ a: 1, b: 2, c: 3, d: "4" });
logValues({ a: 1, b: 2, c: 3, d: "4" });
checkTypeOf('');
checkTypeOf('hello');
checkTypeOf(undefined);
checkTypeOf({ undefined });
checkTypeOf(2);
checkTypeOf(null);
checkTypeOf(true);
checkTypeOf(false);
checkTypeOf(NaN);
checkTypeOf({});
checkTypeOf([]);
checkTypeOf(() => { });
checkTypeOf(() => '');
