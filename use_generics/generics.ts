const test = <T>(arg: T): T => {
  return arg;
}

console.log(test<number>(1));
console.log(test<string>("hello"));

console.log(test(1));