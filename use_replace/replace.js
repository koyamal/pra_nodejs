"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replaceText = (text) => {
    return text.replace(/(and|or)\x20/gi, '$1　');
};
const originText = process.argv[2];
const replacedText = replaceText(originText);
console.log(originText);
console.log(replacedText);
function convertCodeUnits(str) {
    const codeUnits = [];
    for (let i = 0; i < str.length; i++) {
        codeUnits.push(str.charCodeAt(i).toString(16));
    }
    return codeUnits;
}
const convertOriginText = convertCodeUnits(originText);
const convertReplacedText = convertCodeUnits(replacedText);
console.log("originText: ", originText);
console.log(convertOriginText);
console.log("replacedText: ", replacedText);
console.log(convertReplacedText);
