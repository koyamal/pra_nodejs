"use strict";
const operation = {
    a: function () {
        console.log('a');
    },
    b: function () {
        console.log('b');
    },
    c: {
        d: function () {
            console.log('d in c');
        },
        e: function () {
            console.log('e in c');
        }
    }
};
operation['a']();
operation['b']();
operation['c']['d']();
