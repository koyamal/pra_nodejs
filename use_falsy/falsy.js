"use strict";
const val1 = undefined;
const val2 = [];
const val3 = null;
const val4 = false;
const val5 = "";
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
