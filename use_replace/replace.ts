const replaceText = (text: string): string => {
  return text.replace(/(and||or)%20/, 'a');
}

console.log(replaceText("and 123"));

export {}