"use strict";
const checkTypeOf = (val) => {
    console.log(`${val}のtypeは${typeof val}です。`);
    return typeof val === 'string';
};
checkTypeOf('') && console.log('hello');
checkTypeOf(undefined);
checkTypeOf(2);
checkTypeOf(null);
checkTypeOf(true);
checkTypeOf(NaN);
checkTypeOf({});
checkTypeOf([]);
checkTypeOf(() => { });
checkTypeOf(() => { console.log('hello'); });
