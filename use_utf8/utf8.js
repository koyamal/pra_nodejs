const originText = "あいうえお";
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const encodedText = encoder.encode(originText);
const decodedText = decoder.decode(encodedText);