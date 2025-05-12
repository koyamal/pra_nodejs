"use strict";
const checkTypeOf = (val) => {
    console.log(`${val}のtypeは${typeof val}です。`);
    if (typeof val === 'string') {
        console.log(`${val}のtypeはstringです。`);
        return true;
    }
    else {
        console.log(`${val}のtypeは${typeof val}です。`);
        return false;
    }
};
checkTypeOf('');
checkTypeOf(undefined);
checkTypeOf(2);
checkTypeOf(null);
