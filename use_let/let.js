"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const dataBox = [1, 2, 3];
// constの配列に要素を追加していく。
const constBox = [];
dataBox.forEach(data => {
    constBox.push(data);
});
console.log(constBox);
// letの配列に要素を追加していく。
let letBox = [];
dataBox.forEach(data => {
    letBox.push(data);
});
console.log(letBox);
const jsonBox = [
    { date: "2024-01-01T00:00:00Z", id: 1 },
    { date: "2023-01-01T00:00:00Z", id: 3 },
    { date: "2025-01-01T00:00:00Z", id: 2 },
];
function compareByDate(a, b) {
    var r = 0;
    if ((0, dayjs_1.default)(a.date) < (0, dayjs_1.default)(b.date)) {
        r = -1;
    }
    else if ((0, dayjs_1.default)(a.date) > (0, dayjs_1.default)(a.date)) {
        r = 1;
    }
    return r;
}
function compareById(a, b) {
    var r = 0;
    if (a.id < b.id) {
        r = -1;
    }
    else if (a.id > b.id) {
        r = 1;
    }
    return r;
}
console.log("jsonBox", jsonBox);
console.log("sort by id", jsonBox.sort(compareById));
console.log("sort by date", jsonBox.sort(compareByDate));
