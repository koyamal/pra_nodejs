"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customConsole = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
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
