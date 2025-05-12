"use strict";
const checkTypeOf = (val) => {
    if (typeof val === 'string') {
        console.log('typeはstringです。');
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
