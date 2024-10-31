"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replaceText = (text) => {
    return text.replace(/(and||or)%20/, 'a');
};
console.log(replaceText("and 123"));
