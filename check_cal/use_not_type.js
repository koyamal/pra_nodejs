"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
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
};
const bookB = {
    bookId: (0, uuid_1.v4)(),
    bookName: '犬が逃げた',
    author: '佐々木亮介',
    price: 628,
};
console.log(bookA);
if (bookA.author === bookB.author) {
    console.log(`${bookA.bookName}と${bookB.bookName}の筆者は${bookA.author}`);
}
else {
    console.log(`${bookA.bookName}と${bookB.bookName}の筆者は異なります。`);
}
