"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.falseFlagValue = exports.trueFlagFanc = exports.falseTrue = exports.trueFalseFunc = exports.trueFanc = exports.isFanc = void 0;
const value = 1;
const isFanc = () => {
    return value === 1;
};
exports.isFanc = isFanc;
const trueFanc = () => value !== 1;
exports.trueFanc = trueFanc;
const trueFalseFunc = () => {
    if (value)
        return 1;
    return 2;
};
exports.trueFalseFunc = trueFalseFunc;
const falseTrue = () => {
    const prefix = '/';
    const path = 'domain' + prefix;
    return value % 2;
};
exports.falseTrue = falseTrue;
const trueFlagFanc = () => value % 2 === 1 ? 0 : 1;
exports.trueFlagFanc = trueFlagFanc;
const falseFlagValue = () => value % 3 === 0 ? 0 : 1;
exports.falseFlagValue = falseFlagValue;
const type = { type: 'number', dist: 'string' };
const funcType = (type) => {
    if (type.type === 'string') {
        console.log('string');
    }
    else {
        console.log('number');
    }
    if (type.type === 'number')
        return 0;
    return 1;
};
funcType(type);
console.log(type);
