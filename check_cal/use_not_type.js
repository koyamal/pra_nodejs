"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const dayjs_1 = __importDefault(require("dayjs"));
const envTableName = 'is_this_table';
const envFlag = true;
const outputText = `Output Text is ${envFlag ? envTableName : 'no_table'}.`;
console.log(outputText);
// const messageText2: string | undefined = undefined;
const messageText2 = "haelloWorld";
console.log(messageText2.slice(1, 2));
const bookA = {
    bookId: (0, uuid_1.v4)(),
    bookName: '猫飼ってみた',
    author: '冬肘掃除',
    price: 498,
    summary: '猫を拾ったヒロシが猫を飼う中で成長する物語'
};
const bookB = {
    bookId: (0, uuid_1.v4)(),
    bookName: '犬が逃げた',
    author: '佐々木亮介',
    price: 628,
    calPrice() {
        console.log(`${this.author}は${this.bookName}を書きました`);
    },
};
bookA.calPrice && bookA.calPrice();
bookB.calPrice && bookB.calPrice();
console.log(bookA);
if (bookA.author === bookB.author) {
    console.log(`${bookA.bookName}と${bookB.bookName}の筆者は${bookA.author}`);
}
else {
    console.log(`${bookA.bookName}と${bookB.bookName}の筆者は異なります。`);
}
function test(arg) {
    return arg;
}
console.log(test('hello'));
console.log(test(4));
console.log(test(['hello']));
console.log((0, dayjs_1.default)());
const startDate = '2024/10/03 12:30';
console.log((0, dayjs_1.default)(startDate));
console.log((0, dayjs_1.default)(startDate).isBefore((0, dayjs_1.default)()));
if ((0, dayjs_1.default)(startDate).isBefore((0, dayjs_1.default)())) {
    console.log('before');
}
else {
    console.log('after');
}
const iso8061DateJST = '2024-10-03T12:00:00+0900';
const iso8061DateUTC = '2024-10-03T03:00:00Z';
if ((0, dayjs_1.default)(iso8061DateJST) === (0, dayjs_1.default)(iso8061DateUTC)) {
    console.log("同じ");
}
else {
    console.log("違う");
}
console.log((0, dayjs_1.default)(iso8061DateJST).toISOString());
console.log((0, dayjs_1.default)(iso8061DateUTC));
