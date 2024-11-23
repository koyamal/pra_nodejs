const value = 1;
const isFanc = () => {
  return value === 1;
}

const trueFanc = () => {
  return value !== 1;
}

const trueFalseFunc = () => {
  if (value) return 1;
  return 2;
}

export { isFanc, trueFanc }