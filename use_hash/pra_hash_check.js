const crypto = require('crypto');

// console.log(crypto.getHashes());
const plainText = "helloWorld";
console.log(`plain text===>: ${plainText}`);
const sha256Hash = crypto.createHash('sha256').update(plainText).digest('hex');
console.log(`sha256===>: ${sha256Hash} (${sha256Hash.length}文字)`);

const plainTexts = "helloworldXXXX";
console.log(`plain text: ${plainTexts}`);
const sha256Hashscheck = crypto.createHash('sha256').update(plainTexts).digest('hex');
console.log(`sha256: ${sha256Hashscheck} (${sha256Hashscheck.length}文字)`);

const asyncMessage = {
  message: 'helloWorld',
  good: true,
  bad: false,
};

console.log(asyncMessage.message);
asyncMessage.good && console.log("hello");
asyncMessage.bad || console.log("bye");