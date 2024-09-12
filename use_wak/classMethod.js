class ClassA {
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }
  funcA() {
    console.log(this.val1 + this.val2);
  }
}

const instanceA = new ClassA("hello", "world");

instanceA.funcA();