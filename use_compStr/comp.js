"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const targetDate = '2025-01-02 09:00';
const compareDate = [
    '2024-01-02 09:00:00',
    '2025-01-02 08:59:59',
    '2025-01-02 09:00:00',
    '2025-01-02 09:00:01',
    '2025-01-03 08:59:59',
    '2025-01-03 09:00:00',
    '2025-02-01 09:00',
];
const compStr = (val1, val2) => {
    return val1 >= val2;
};
compareDate.forEach((date) => {
    if (compStr(targetDate, date)) {
        console.log(`${targetDate} >= ${date}`);
    }
    else {
        console.log(`${targetDate} < ${date}`);
    }
});
const targetList = [
    '1', '2', '3', '10', '11', '20', '30', '101', '102',
];
targetList.forEach(target => {
    targetList.forEach(compVal => {
        if (compStr(target, compVal)) {
            console.log(`${targetDate} >= ${compVal}`);
        }
        else {
            console.log(`${targetDate} < ${compVal}`);
        }
    });
});
