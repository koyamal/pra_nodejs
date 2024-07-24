const crypto = require('crypto');

// console.log(crypto.getHashes());
const plainText = "helloWorld";
console.log(`plain text: ${plainText}`);
const sha256Hash = crypto.createHash('sha256').update(plainText).digest('hex');
console.log(`sha256: ${sha256Hash} (${sha256Hash.length}文字)`);

const plainTexts = "helloworld";
console.log(`plain text: ${plainTexts}`);
const sha256Hashs = crypto.createHash('sha256').update(plainTexts).digest('hex');
console.log(`sha256: ${sha256Hashs} (${sha256Hashs.length}文字)`);