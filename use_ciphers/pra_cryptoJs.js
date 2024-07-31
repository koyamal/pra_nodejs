const CryptoJS = require('crypto-js');

const originText = 'goodBy';

const encrypted = CryptoJS.AES.encrypt(originText, "bye");
console.log('=======================');
console.log(`${originText} to ${encrypted}`);
console.log(`key: ${encrypted.key}`);
console.log(`iv: ${encrypted.iv}`);
console.log(`salt: ${encrypted.salt}`);
console.log(`ciphertext: ${encrypted.ciphertext}`);
console.log('=======================');

const decrypted = CryptoJS.AES.decrypt(encrypted, "hello");
console.log(`decrypted: ${decrypted.toString(CryptoJS.enc.Utf8)}`); // utf-8