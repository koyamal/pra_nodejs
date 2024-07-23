const crypto = require('crypto');

console.log(crypto.getHashes());

console.log(crypto.createHash('sha256').update("plainText").digest('hex'));