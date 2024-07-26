const CryptoJS = require('crypto-js');

const originText = 'helloWorld';

const consoleHash = (type, msg, hashHex) => {
  console.log(`${type}(${msg}): ${hashHex} (${hashHex.length})`);
}

const toHashMd5 = (msg, flag=false) => {
  const hash = CryptoJS.MD5(msg);
  const hashHex = hash.toString(CryptoJS.enc.Hex);
  if (flag) consoleHash('md5', msg, hashHex);
  return hashHex;
}

const toHashSha1 = (msg, flag=false) => {
  const hash = CryptoJS.SHA1(msg);
  const hashHex = hash.toString(CryptoJS.enc.Hex);
  if (flag) consoleHash('sha-1', msg, hashHex);
  return hashHex;
}

const toHashSha256 = (msg, flag=false) => {
  const hash = CryptoJS.SHA256(msg);
  const hashHex = hash.toString(CryptoJS.enc.Hex);
  if (flag) consoleHash('sha-256', msg, hashHex);
  return hashHex;
}

const toHashSha512 = (msg, flag=false) => {
  const hash = CryptoJS.SHA512(msg);
  const hashHex = hash.toString(CryptoJS.enc.Hex);
  if (flag) consoleHash('sha-512', msg, hashHex);
  return hashHex;
}

// outputLengthは224, 256, 384, 512
const toHashSha3 = (msg, flag=false, outputLength=512) => {
  const hash = CryptoJS.SHA3(msg, { outputLength });
  const hashHex = hash.toString(CryptoJS.enc.Hex);
  if (flag) consoleHash('sha-3', msg, hashHex);
  return hashHex;
}

const toHmacSha256 = (msg, flag=false, secretKey) => {
  const hash = CryptoJS.HmacSHA256(msg, secretKey);
  const hashHex = hash.toString(CryptoJS.enc.Hex);
  if (flag) consoleHash('hmac-256', `${msg}, ${secretKey}`, hashHex);
  return hashHex;
}

toHashMd5(originText, true);
toHashSha1(originText, true);
toHashSha256(originText, true);
toHashSha512(originText, true);
toHashSha3(originText, true);
toHashSha3(originText, true, 224);
toHmacSha256(originText, true, 'abcd');
toHmacSha256(originText, true, 'abce');