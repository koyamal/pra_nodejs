class Psession {
  data: {
    id: string;
    bId: string | null;
    cId: string | null;
    type: string;
    updatedAt: string;
    createdAt?: string | null;
  }
  constructor(data: {id: string; bId: string | null; cId: string | null; type: string}) {
    this.data = {
      ...data,
      updatedAt: new Date().getUTCDate().toString(),
      ...(data.type === 'A' ? {}: {createdAt: new Date().getUTCDate().toString()})
    }
  }
  outputLog() {
    console.log({...this.data});
  }
}

const psession = new Psession({id: '12344', bId: 'dboeiradkm', cId: null, type: 'A'});
psession.outputLog();

const psession2 = new Psession({id: '54323456', bId: 'sdfawerjfsdlkjsad', cId: 'dfjsakfjfsdk', type: 'B'});
const psession3 = new Psession({id: '54323456', bId: 'sdfawerjfsdlkjsad', cId: 'dfjsakfjfsdk', type: 'A'});
psession2.outputLog();