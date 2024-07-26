const CryptoJS = require('crypto-js');

const originText = 'helloWorld';

const toHashSha256 = (msg, flag=false) => {
  const hash = CryptoJS.SHA256(msg);
  const hashHex = hash.toString(CryptoJS.enc.Hex);
  if (flag) console.log(`sha-256(${msg}): ${hashHex} (${hashHex.length})`);
  return hashHex;
}

console.log(toHashSha256(originText, true));