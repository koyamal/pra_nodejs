"use strict";
const checkTypeOf = (val) => {
    if (typeof val === 'string') {
        console.log('typeはstringです。');
        return 'string';
    }
    else {
        console.log('typeはstringではありません。');
        return 'not string';
    }
};
checkTypeOf('');
checkTypeOf(undefined);
