"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
const roundUpSecond = (rowSecond, unitValue) => {
    const remainder = rowSecond % unitValue;
    console.log({ remainder });
    return rowSecond + (unitValue - remainder);
};
const ceilTimestamp = () => {
    const currentUtc = (0, dayjs_1.default)().utc();
    const currentUtcString = currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm');
    return (0, dayjs_1.default)(currentUtcString).add(roundUpSecond(currentUtc.second(), 5), 's').format('YYYY-MM-DD HH:mm:ss');
};
console.log(ceilTimestamp());
