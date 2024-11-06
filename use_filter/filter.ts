const numberBox = [1, 3, 4, 4, 7, 6, 11, 65, 23, 1, 5, 8];

const filteredBox = numberBox.filter(number => number % 7 === 0);
console.log(filteredBox);

const filteredMappedBox = numberBox.filter(number => number % 2 === 0).map(number => { return {value: number}});
console.log(filteredMappedBox);