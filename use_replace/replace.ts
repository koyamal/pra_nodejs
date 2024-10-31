const replaceText = (text: string): string => {
  return text.replace(/(and|or)\x20/, '$1 ');
}
console.log("and 123");
console.log(replaceText("and 123"));

export {}