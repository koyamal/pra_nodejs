"use strict";
const checkTypeOf = (val) => {
    if (typeof val === 'string') {
        console.log('typeはstringです。');
        return 'string';
    }
    else {
        console.log('stringではありません。');
        console.log(`${val}は${typeof val}です。`);
        return 'not string';
    }
};
checkTypeOf('');
checkTypeOf(undefined);
checkTypeOf(2);
