"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MS {
    constructor(msValue) {
        this.Ms = msValue;
    }
    getMs() {
        return this.Ms;
    }
    ;
}
let messaging;
const a = messaging ? messaging.getMs() : 'none';
console.log(a);
