const replaceText = (text: string): string => {
  return text.replace(/(and|or)\x20/, '$1 ');
}

const originText = "and 123";
console.log(originText);
console.log(replaceText(originText));

function convertCodeUnits(str: string) {
  const codeUnits = [];
  for (let i = 0; i < str.length; i++) {
      codeUnits.push(str.charCodeAt(i).toString(16));
  }
  return codeUnits;
}

const convertReplacedText = ""

export {}