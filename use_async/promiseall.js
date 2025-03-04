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
        }, 3000);
    });
}
function myPromiseError(num) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            throw Error('error');
        }, 3000);
    });
}
const doPromiseAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Promise.all([
            myPromise(1),
            myPromise(2),
            myPromiseError(3),
        ]);
    }
    catch (e) {
        console.log(e);
    }
});
doPromiseAll();
