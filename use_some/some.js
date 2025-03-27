"use strict";
const array1 = [
    { id: '1', data: 'hello' },
    { id: '2', data: 'bye' },
    { id: '3', data: 'yes' },
];
const array2 = [
    { id: '2', data: 'bye' },
];
const array3 = array1.some(d => array2.some(da => da.id === d.id));
console.log(array3);
