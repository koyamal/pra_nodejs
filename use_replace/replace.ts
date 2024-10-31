const replaceText = (text: string): string => {
  return text.replace(/(and|or)\x20/, '$1 ');
}

const originText = "and 123"
console.log(originText);
console.log(replaceText(originText));

export {}