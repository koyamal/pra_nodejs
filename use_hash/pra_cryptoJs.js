const sha256 = require('crypto-js/sha256');
const CryptoJS = require('crypto-js');
const hashDigest = sha256("helloWorld");
console.log(hashDigest);

var hash = CryptoJS.SHA256("Message");
console.log(typeof hash);
console.log(hash);
console.log(hash.toString(CryptoJS.enc.Base64));
console.log(hash.toString(CryptoJS.enc.Hex));

const toHashSha256 = (msg) => {
  const hash = CryptoJS.SHA256(msg);
  return hash.toString(CryptoJS.enc.Hex);
}

console.log(toHashSha256("helloWorld"));