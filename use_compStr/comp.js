"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const targetDate = '2025-01-02 09:00';
const compareDate = [
    '2025-01-02 08:59:59',
    '2025-01-02 09:00:00',
    '2025-01-02 09:00:01',
];
compareDate.forEach((date) => {
    if (targetDate >= date) {
        console.log(`${date}：targetDate >= date`);
    }
    else {
        console.log(`${date}：targetDate < date`);
    }
});
