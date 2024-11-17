const arrayData = [1, 2, 3];

console.log(...arrayData);

const objData = {one: "one", two: "two", three: "three"};

console.log({four: "four", ...objData});

const outputData = [
  ...[1, 2, 3],
  4,
  ...(true? [5]: [6])
];

console.log(outputData);