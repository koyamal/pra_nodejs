const CryptoJS = require('crypto-js');

const originText = 'helloWorld';

const encrypted = CryptoJS.AES.encrypt(originText, "hello");
console.log(`${originText} to ${encrypted}`);

const decrypted = CryptoJS.AES.decrypt(encrypted, "hello");