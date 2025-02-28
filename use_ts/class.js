"use strict";
class Psession {
    constructor(data) {
        this.data = Object.assign(Object.assign(Object.assign({}, data), { updatedAt: new Date().getUTCDate().toString() }), (data.type === 'A' ? {} : { createdAt: new Date().getUTCDate().toString() }));
    }
    outputLog() {
        console.log(Object.assign({}, this.data));
    }
}
