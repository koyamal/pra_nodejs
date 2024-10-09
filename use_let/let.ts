const dataBox = [1, 2, 3];

// constの配列に要素を追加していく。
const constBox: number[] = [];

dataBox.forEach(data => {
  constBox.push(data);
});
console.log(constBox);

// letの配列に要素を追加していく。
let letBox: number[] = [];

dataBox.forEach(data => {
  letBox.push(data);
});
console.log(letBox);

const jsonBox = [
  {date: "2024-01-01T00:00:00Z", id: 1},
  {date: "2023-01-01T00:00:00Z", id: 2},
  {date: "2025-01-01T00:00:00Z", id: 3},
];

type JsonBox = {
  date: string
  id: number;
};

console.log(jsonBox);