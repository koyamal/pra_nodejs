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
console.log(messaging ? messaging.getMs() : 'none');
messaging = new MS('messaging');
console.log(messaging ? messaging.getMs() : 'none');
