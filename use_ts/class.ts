class Psession {
  data: {
    id: string;
    bId: string | null;
    cId: string | null;
    type: string;
  }
  constructor(data: {id: string; bId: string | null; cId: string | null; type: string}) {
    this.data = {}
  }
}