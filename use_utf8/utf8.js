const originText = "ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえお";
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const encodedText = encoder.encode(originText);
const decodedText = decoder.decode(encodedText);

console.log("encode", encodedText);
console.log("decode", decodedText);
console.log("decodeText", decodedText);