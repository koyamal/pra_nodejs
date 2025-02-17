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
const compareValues = [
    '0', '1', '2', '3', '10', '11', '20', '30', '101', '102',
];
compareValues.forEach(val1 => {
    compareValues.forEach(val2 => {
        compStr(val1, val2);
    });
});
class compString {
    constructor(data) {
        this.calc = (func) => {
            console.log(`${this.firstType}: ${this.secondType}`);
            func();
            return true;
        };
        this.calcPub = (val1) => {
            this.calc(() => {
                console.log("done");
            });
            return this.calc(() => { console.log(val1); });
        };
        this.compStr = (val1, val2) => {
            if (val1 >= val2) {
                console.log(`${val1} >= ${val2}`);
            }
            else {
                console.log(`${val1} < ${val2}`);
            }
        };
        this.disCompStr = (val1, val2) => {
            if (val1 > val2) {
                console.log(`${val1} > ${val2}`);
            }
            else {
                console.log(`${val1} =< ${val2}`);
            }
        };
        this.firstType = data.firstType;
        this.secondType = data.secondType;
    }
}
const instanceCompString = new compString({ firstType: 'A', secondType: '2' });
instanceCompString.compStr('A', 'B');
instanceCompString.disCompStr('A', 'B');
// instanceCompString.calc();
instanceCompString.calcPub('hello');
