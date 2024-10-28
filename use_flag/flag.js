"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randValue = Math.random();
const getFlag = (value) => {
    if (value > 0.5) {
        return true;
    }
    else {
        return false;
    }
};
const flag = getFlag(randValue);
