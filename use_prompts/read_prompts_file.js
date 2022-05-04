const qs = {
    type: 'number',
    name: 'value',
    message: 'How old are you?',
    validate: value => value < 18 ? `Nightclub is 18+ only` : true
};

console.log(qs);
qs = [].concat(qs);
console.log(qs);

for (question of qs){
    ({ name, type } = question);
    console.log(name);
    console.log(type);
    console.log(question);
}