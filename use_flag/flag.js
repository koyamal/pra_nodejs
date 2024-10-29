"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const getFlag = () => {
    const randValue = Math.random();
    if (randValue > 0.5) {
        return true;
    }
    else {
        return false;
    }
};
const flag = getFlag();

const rowParams = [
    {
        group_number: '23431223',
        onlyTrue: true,
    },
    {
        test_value: 'hello',
        onlyTrue: false,
    },
    {
        happy_hour: '2points',
        onlyTrue: getFlag
    }
];
const sendParams = rowParams.filter(param => !param.onlyTrue || (param.onlyTrue && flag));
console.log(sendParams);
