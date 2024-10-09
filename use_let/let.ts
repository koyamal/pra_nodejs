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

type JsonBox = {
  date: string
  id: number;
};

const jsonBox: JsonBox[] = [
  {date: "2024-01-01T00:00:00Z", id: 1},
  {date: "2023-01-01T00:00:00Z", id: 3},
  {date: "2025-01-01T00:00:00Z", id: 2},
];

function compareById( a: JsonBox , b: JsonBox ){
  var r = 0;
  if( a.id < b.id ){ r = -1; }
  else if( a.id > b.id ){ r = 1; }

  return r;
}

function compareBydate( a: JsonBox , b: JsonBox ){
  var r = 0;
  if( a.id < b.id ){ r = -1; }
  else if( a.id > b.id ){ r = 1; }

  return r;
}

console.log(jsonBox);
console.log(jsonBox.sort(compareById));