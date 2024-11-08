class MS {
  constructor (msValue: string) {
    this.Ms = msValue;
  }
  Ms: string;
  getMs(): string {
    return this.Ms;
  };
}

let messaging: MS | undefined;

const a = messaging ? messaging.getMs(): 'none';
console.log(a);
export {}