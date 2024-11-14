"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
const roundSecond = (rowSecond, unitValue) => {
    const remainder = rowSecond % unitValue;
    // console.log("e", dayjs("das").add(rowSecond + (unitValue - remainder), 's').format('YYYY-MM-DD HH:mm:ss'))
    // return dayjs(das).add(rowSecond + (unitValue - remainder), 's')
    return rowSecond + (unitValue - remainder);
};
const cT = () => {
    const currentUtc = (0, dayjs_1.default)().utc();
    const currentUtcString = currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm');
    return (0, dayjs_1.default)(currentUtcString).add(roundSecond(currentUtc.second(), 5));
    // return currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:') + roundSecond(currentUtc.second(), 5, currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm'));
};
console.log(cT());
