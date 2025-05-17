"use strict";
const checkTypeOf = (val) => {
    console.log(`${val}のtypeは${typeof val}です。`);
    return typeof val === 'string';
};
checkTypeOf('') && console.log('hello');
checkTypeOf(undefined) && console.log('hello');
checkTypeOf(2) && console.log('hello');
checkTypeOf(null);
checkTypeOf(true);
checkTypeOf(NaN);
checkTypeOf({});
checkTypeOf([]);
checkTypeOf(() => { });
checkTypeOf(() => { console.log('hello'); });
