"use strict";
const espLines = "hello,\nworld.";
const espTabs = "hello,\tworld.";
const userName = "Bob";
console.log(espLines);
console.log(espTabs);
const textOrigin = [
    "こんにちは。",
    `私の名前は${userName}です。`,
    "よろしくお願いします。",
    "頑張ります。"
].join();
console.log(textOrigin);
const textLines = [
    "こんにちは。",
    `私の名前は${userName}です。`,
    "",
    "よろしくお願いします。",
    "",
    "頑張ります。"
].join('\n');
console.log(textLines);
const textTabs = [
    "こんにちは。",
    `私の名前は${userName}です。`,
    "よろしくお願いします。",
    "頑張ります。"
].join('\t');
console.log(textTabs);
const textPages = [
    "こんにちは。",
    `私の名前は${userName}です。`,
    "よろしくお願いします。",
    "頑張ります。"
].join('\f');
console.log(textPages);
const textBackSpace = [
    "こんにちは。",
    `私の名前は${userName}です。`,
    "よろしくお願いします。",
    "頑張ります。"
].join('\b');
console.log(textBackSpace);
