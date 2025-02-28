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