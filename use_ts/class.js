"use strict";
class Psession {
    constructor(data) {
        this.data = Object.assign(Object.assign(Object.assign({}, data), { updatedAt: new Date().getUTCDate().toString() }), (data.type === 'A' ? {} : { createdAt: new Date().getUTCDate().toString() }));
    }
    outputLog() {
        console.log(Object.assign({}, this.data));
    }
}
const psession = new Psession({ id: '12344', bId: 'dboeiradkm', cId: null, type: 'A' });
psession.outputLog();
const psession2 = new Psession({ id: '54323456', bId: 'sdfawerjfsdlkjsad', cId: 'dfjsakfjfsdk', type: 'B' });
const psession3 = new Psession({ id: '54323456', bId: 'sdfawerjfsdlkjsad', cId: 'dfjsakfjfsdk', type: 'A' });
psession2.outputLog();
psession3.outputLog();
