const test = <T>(arg: T): T => {
  return arg;
}

const test2 = <T extends argTypes>(arg: T): string => {
  return arg.name;
}

interface argTypes {
  name: string;
}

console.log(test<number>(1));
console.log(test<string>("hello"));

console.log(test(1));
console.log(test("hello"));

console.log(test2({name : "name", age: 23}));