"use strict";
const startPoint = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((_, i) => {
    return String.fromCharCode(startPoint + i);
});
const excludeProps = ['A', 'C', 'E', 'G', 'H', 'Z'];
