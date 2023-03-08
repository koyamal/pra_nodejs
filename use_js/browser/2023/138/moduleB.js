// import defaultVal, { publicVal as val, publicFn } from "./moduleA.js";
import defaultVal, * as moduleA from "./moduleA.js";

// console.log(publicVal);
// console.log(val);
console.log(defaultVal);
console.log(moduleA.default);
moduleA.publicFn();
// publicFn();