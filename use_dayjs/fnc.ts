const value = 1;
const isFanc = () => {
  return value === 1;
}

const trueFanc = () => value !== 1;

const trueFalseFunc = () => {
  if (value) return 1;
  return 2;
}

const falseTrue = () => {
  const prefix = '/';
  const path = 'domain' + prefix;
  return value % 2;
}

const trueFlagFanc = () => value % 2 === 1 ? 0 : 1;

const falseFlagFanc = () => value % 3 === 0 ? 0 : 1;

export { isFanc, trueFanc, trueFalseFunc, falseTrue, trueFlagFanc, falseFlagFanc }