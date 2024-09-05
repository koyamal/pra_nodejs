const originText = ' a b c ';
const output = originText.trim();
console.log(output);

const output2 = originText.trimStart();
console.log(output2);

const output3 = originText.trimEnd();
console.log(output3);

const spaceText = '  ';
console.log(spaceText.trim().length === 0? 'only space': 'text');