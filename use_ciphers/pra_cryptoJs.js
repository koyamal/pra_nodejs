const CryptoJS = require('crypto-js');

const originText = 'helloWorld';

const encrypted = CryptoJS.AES.encrypt(originText, "hello");
console.log(`${originText} to ${encrypted}`);

const decrypted = CryptoJS.AES.decrypt(encrypted, "hello");
console.log(`decrypted: ${decrypted}`); // utf-8
console.log(decrypted.toString(CryptoJS.enc.Utf8));