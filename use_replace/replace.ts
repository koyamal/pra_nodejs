const replaceText = (text: string): string => {
  return text.replace(/(and|or|hello)\x20/gi, '$1　');
}

const originText = process.argv[2]? process.argv[2]: "and 123 OR 345";
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