const dataBox = [1, 2, 3];

const constBox = [];
dataBox.forEach(data => {
    constBox.push(data);
});
console.log(constBox);

let letBox = [];
dataBox.forEach(data => {
    letBox.push(data);
});
console.log(letBox);
