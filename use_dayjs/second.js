"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
const roundSecond = (rowSecond, unitValue, das) => {
    const remainder = rowSecond % unitValue;
    console.log((0, dayjs_1.default)(das).add(rowSecond + (unitValue - remainder), 's'));
    // return dayjs(das).add(rowSecond + (unitValue - remainder), 's')
    return rowSecond + (unitValue - remainder);
};
const amari = (val) => {
    const val2 = (0, dayjs_1.default)().second();
    console.log(val2);
    const amari = val2 % 5;
    return val2 + (5 - amari);
};
const cT = () => {
    const currentUtc = (0, dayjs_1.default)().utc();
    console.log(currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:ss'));
    return currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:') + roundSecond(currentUtc.second(), 5, currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm'));
};
console.log(cT());
