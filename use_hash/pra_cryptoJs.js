const sha256 = require('crypto-js/sha256');
const hashDigest = sha256("helloWorld");
console.log(hashDigest);