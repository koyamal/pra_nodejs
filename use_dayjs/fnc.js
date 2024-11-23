"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trueFalseFunc = exports.trueFanc = exports.isFanc = void 0;
const value = 1;
const isFanc = () => {
    return value === 1;
};
exports.isFanc = isFanc;
const trueFanc = () => { value !== 1; };
exports.trueFanc = trueFanc;
const trueFalseFunc = () => {
    if (value)
        return 1;
    return 2;
};
exports.trueFalseFunc = trueFalseFunc;
