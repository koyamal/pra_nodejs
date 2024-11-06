const numberBox = [1, 3, 4, 4, 7, 6, 11, 65, 23, 1, 5];

const filteredBox = numberBox.filter(number => number % 7 === 0);
console.log(filteredBox);