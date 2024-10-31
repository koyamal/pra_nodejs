const replaceText = (text: string): string => {
  return text.replace(/(and|or)\x20/, '$1  ');
}

const originText = "and 123";
const replacedText = replaceText(originText);
console.log(originText);
console.log(replacedText);

function convertCodeUnits(str: string) {
  const codeUnits = [];
  for (let i = 0; i < str.length; i++) {
      codeUnits.push(str.charCodeAt(i).toString(16));
  }
  return codeUnits;
}

const convertOriginText = convertCodeUnits(originText);
const convertReplacedText = convertCodeUnits(replacedText);

console.log("originText: ",originText);
console.log(convertOriginText);

console.log("replacedText: ", replacedText);
console.log(convertReplacedText);

export {}