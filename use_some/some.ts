const array1 = [
  {id: '1', data: 'hello'},
  {id: '2', data: 'bye'},
  {id: '3', data: 'yes'},
];

const array2 = [
  {id: '0', data: 'zero'},
  {id: '2', data: 'bye'},
  {id: '3', data: 'seeyou'},
];

const flag = array1.some(d => array2.some(da => da.id === d.id));

const flag2 = array1.some(d => d.data === 'bye');

array1.some(d => d.data === 'seeyou');
console.log('seeyou');

console.log({flag});

console.log({flag2});