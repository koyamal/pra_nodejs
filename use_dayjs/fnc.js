"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.falseFlagFanc = exports.trueFlagFanc = exports.falseTrue = exports.trueFalseFunc = exports.trueFanc = exports.isFanc = void 0;
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
    return value % 2;
};
exports.falseTrue = falseTrue;
const trueFlagFanc = () => value % 2 === 1 ? 0 : 1;
exports.trueFlagFanc = trueFlagFanc;
const falseFlagFanc = () => value % 3 === 0 ? 0 : 1;
exports.falseFlagFanc = falseFlagFanc;
