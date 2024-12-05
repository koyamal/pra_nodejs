"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFunc = exports.customConsole = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const customFunc = (val) => {
    if (val.type === 'A') {
        if (val.value === '1') {
            console.log("Value is 1");
        }
        else if (val.value === '2') {
        }
        console.log("This is type A");
    }
    else if (val.type === 'B') {
        console.log("This is type B");
    }
    else if (val.type === 'C') {
        console.log("This is type B");
    }
};
exports.customFunc = customFunc;
const customConsole = (val) => {
    console.log(val);
};
exports.customConsole = customConsole;
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(utc_1.default);
const nowNoTz = (0, dayjs_1.default)();
const nowTokyo = (0, dayjs_1.default)().tz("Asia/Tokyo");
customConsole({ nowNoTz });
customConsole({ nowTokyo });
