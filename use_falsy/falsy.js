"use strict";
const val1 = undefined; // falsy
const val2 = []; // truty
const val3 = null; // falsy
const val4 = false; // falsy
const val5 = ""; // falsy
const valBox = [val1, val2, val3, val4, val5];
if (val1) {
    console.log("val1はTruthy");
}
else {
    console.log("val1はFalsy");
}
if (val2) {
    console.log("val2はTruthy");
}
else {
    console.log("val2はFalsy");
}
console.log(val1 !== null && val1 !== void 0 ? val1 : `${val1} ?? X => X`);
console.log(val2 !== null && val2 !== void 0 ? val2 : `${val2} ?? X => X`);
console.log(val3 !== null && val3 !== void 0 ? val3 : `${val3} ?? X => X`);
console.log(val4 !== null && val4 !== void 0 ? val4 : `${val4} ?? X => X`);
console.log(val5 !== null && val5 !== void 0 ? val5 : `${val5} ?? X => X`);
if (val1 !== undefined) {
    console.log(`${val1}はundefinedではありません。`);
}
else {
    console.log(`${val1}はundefinedです。`);
}
valBox.forEach(val => {
    if (val !== undefined) {
        console.log(`${val}はundefinedではありません。`);
    }
    else {
        console.log(`${val}はundefinedです。`);
    }
});
