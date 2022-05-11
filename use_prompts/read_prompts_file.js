let questions = [
    {
        type: 'number',
        name: 'value',
        message: 'How old are you?',
        validate: value => value < 18 ? `Nightclub is 18+ only` : true
    },
    {
        type: 'number',
        name: 'value02',
        //message: 'How old are you?',
        validate: value => value < 18 ? `Nightclub is 18+ only` : true
    },
];

console.log(questions);
questions = [].concat(questions);
console.log(questions);

for (question of questions){
    ({ name, type, message} = question);
    console.log(name);
    console.log(type);
    console.log(message);
    console.log(question);
}