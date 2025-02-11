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
    if (val1 >= val2) {
        console.log(`${val1} >= ${val2}`);
    }
    else {
        console.log(`${val1} < ${val2}`);
    }
};
compareDate.forEach(date => {
    compStr(targetDate, date);
});
const targetList = [
    '1', '2', '3', '10', '11', '20', '30', '101', '102',
];
targetList.forEach(target => {
    targetList.forEach(compVal => {
        compStr(target, compVal);
    });
});
