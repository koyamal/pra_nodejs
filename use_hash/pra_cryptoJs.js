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

toHashMd5(originText, true);
toHashSha256(originText, true);
toHashSha512(originText, true);