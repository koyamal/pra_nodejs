"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function myPromise(num) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(num);
        }, 500);
    });
}
function myGetPromise(num) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log(`myGetPromise ${num}`);
            resolve(num);
        }, 500);
    });
}
function myPromiseError(num) {
    return new Promise(function (resolve, rejects) {
        setTimeout(() => {
            try {
                throw new Error('error!');
            }
            catch (e) {
                if (num)
                    resolve('resolve is called');
                rejects('rejects is called');
            }
        }, 500);
    });
}
const doPromiseAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Promise.all([
            myPromise(1),
            myPromise(2),
            myPromiseError(0),
            myPromiseError(1),
            myPromiseError(2),
        ]);
        console.log('after Promise.all');
    }
    catch (e) {
        console.log('Promise.allでエラーをキャッチ');
        console.log(e);
        console.log('Promise.allのcatchの最終行');
    }
});
const doPromiseAllResolve = (num) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${num} is start`);
    const res = yield myPromise(num);
    console.log(`${num} is done: res=${res}`);
});
const doPromiseAllSettled = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield Promise.allSettled([
            myPromise(1),
            myPromise(1),
            myPromise(2),
            myPromiseError(0),
            myPromiseError(1),
            myPromiseError(2),
        ]);
        console.log('after Promise.all');
        console.log(res);
    }
    catch (e) {
        console.log('Promise.allでエラーをキャッチ');
        console.log(`エラー内容：${e}`);
        console.log('Promise.allのcatchの最終行');
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Promise.all is start');
    yield Promise.all([
        doPromiseAllResolve(1),
        doPromiseAllResolve(2),
        doPromiseAllResolve(3),
        doPromiseAllSettled(),
        doPromiseAllSettled(),
        myGetPromise(1)
    ]);
    console.log('Promise.all is done');
}))();
