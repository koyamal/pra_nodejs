let qs = {
    type: 'number',
    name: 'value',
    message: 'How old are you?',
    validate: value => value < 18 ? `Nightclub is 18+ only` : true
};

console.log(qs);
qs = [].concat(qs);
console.log(qs);