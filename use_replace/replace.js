"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replaceText = (text) => {
    return text.replace(/(and|or)\x20/, '$1 ');
};
const originText = "and 123";
console.log(originText);
console.log(replaceText(originText));
