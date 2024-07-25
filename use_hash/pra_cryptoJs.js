const sha256 = require('crypto-js/sha256');
const crypto = require('crypto-js');
const hashDigest = sha256("helloWorld");
console.log(hashDigest);

var hash = crypto.SHA256("Message");
console.log(hash);