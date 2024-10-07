const dataBox = [1, 2, 3];

const constBox:number[] = [];

dataBox.forEach(data => {
  constBox.push(data);
});

console.log(constBox);

let letBox: number[] = [];
dataBox.forEach(data => {
  letBox.push(data);
});

console.log(letBox);