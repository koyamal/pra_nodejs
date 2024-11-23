"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trueFanc = exports.isFanc = void 0;
const value = 1;
const isFanc = () => {
    return value === 1;
};
exports.isFanc = isFanc;
const trueFanc = () => {
    return value !== 1;
};
exports.trueFanc = trueFanc;
