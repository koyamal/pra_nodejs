const crypto = require('crypto');

// console.log(crypto.getHashes());

const sha256Hash = crypto.createHash('sha256').update("plainText").digest('hex');
console.log(sha256Hash);