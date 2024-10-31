const replaceText = (text: string): string => {
  return text.replace(/(and|or)\x20/, '$1 a');
}

console.log(replaceText("and 123"));

export {}