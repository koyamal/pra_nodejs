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


console.log(messaging ? messaging.getMs(): 'none');

messaging = new MS('messaging');
console.log(messaging ? messaging.getMs(): 'none');

export {}