const numberBox: number[] = [1, 3, 4, 4, 7, 6, 11, 65, 23, 1, 5, 8];

const filteredBox = numberBox.filter(number => number % 7 === 0);
console.log(filteredBox);

const filteredMappedBox = numberBox.filter(number => number % 2 === 0).map(number => { return {valueNumber: number}});
console.log(filteredMappedBox);

const MappedfilteredBox = numberBox.map(number => { return {valueNumber: number}}).filter(val => val.valueNumber >= 6);
console.log(MappedfilteredBox);