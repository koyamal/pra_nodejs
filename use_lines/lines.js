"use strict";
const espLines = "hello,\nworld.";
const espTabs = "hello,\tworld.";
const userName = "Bob";
console.log(espLines);
console.log(espTabs);
const textLines = [
    "こんにちは。",
    `私の名前は${userName}です。`,
    "",
    "よろしくお願いします。",
    "",
    "頑張ります。"
].join('\n').split('\n');
console.log(textLines);
