"use strict";
const constParams = {};
Object.assign(constParams, { a: 'valueA', b: 'valueB' });
Object.assign(constParams, { c: 'valueC', d: { e: 'valueE', f: 'valueF' } });
console.log(constParams);
