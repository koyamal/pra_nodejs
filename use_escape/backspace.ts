const textOrigin = [
  "こんにちは。",
  `私の名前はBobです。`,
  "よろしくお願いします。",
  "頑張ります。"
].join('');

console.log("textOrigin", textOrigin);

const textBackSpace = [
  "こんにちは。",
  `私の名前はBobです。`,
  "よろしくお願いします。",
  "頑張ります。"
].join('\b');

console.log("textBackSpace", textBackSpace);

export {};