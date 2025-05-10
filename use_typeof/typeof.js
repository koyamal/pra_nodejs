"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metaTitle = '';
const checkTypeOf = (metaTitle) => {
    if (typeof metaTitle === 'string') {
        console.log('metaTitleのtypeはstringです。');
        return 'string';
    }
    else {
        console.log('metaTitleのtypeはstringではありません。');
        return 'not string';
    }
};
checkTypeOf(metaTitle);
