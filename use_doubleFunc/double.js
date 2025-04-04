"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            return 2;
        },
        f: {
            g: function () {
                console.log('g in f in c');
                return 1;
            },
            j: {
                k: function () {
                    console.log('k in j in f in c');
                    return 0;
                }
            }
        }
    },
    l: function (val1) {
        val1.b = 'l';
        val1.a = 'none';
    },
    m: function (val1) {
        if (val1 === null)
            return 'null';
        const newVal1 = val1 + 'new';
        return newVal1;
    }
};
const inputText = 'c';
operation['a']();
operation['b']();
operation[inputText]['d']();
const h = operation[inputText]['f']['g'];
h();
const i = operation[inputText]['f'];
i.g();
i.g();
operation[inputText]['f']['j']['k']();
const origin = { a: 'a', b: 'b' };
const copy = origin;
copy.a = 'c';
console.log({ origin });
operation['l'](origin);
console.log({ origin });
console.log(operation['m'](null));
console.log(operation['m']('hello'));
console.log(operation['m']('null'));
