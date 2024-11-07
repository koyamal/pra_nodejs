import dayjs from "dayjs";

type JsonBox = {
  date: string
  id: number;
};

const jsonBox: JsonBox[] = [
  {date: "2024-01-01T00:00:00Z", id: 1},
  {date: "2023-01-01T00:00:00Z", id: 3},
  {date: "2025-01-01T00:00:00Z", id: 2},
];

function compareByDate( a: JsonBox , b: JsonBox ){
  var r = 0;
  if( dayjs(a.date) < dayjs(b.date) ){ r = -1; }
  else if( dayjs(a.date) > dayjs(a.date) ){ r = 1; }

  return r;
}

function compareById( a: JsonBox , b: JsonBox ){
  var r = 0;
  if( a.id < b.id ){ r = -1; }
  else if( a.id > b.id ){ r = 1; }

  return r;
}

console.log("jsonBox", jsonBox);
console.log("sort by id", jsonBox.sort(compareById));
console.log("sort by date", jsonBox.sort(compareByDate));