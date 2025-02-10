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

const falseFlagValue = () => value % 3 === 0 ? 0 : 1;

type Type  = {
  type: 'string' | 'number';
  dist: string;
}

const type: Type = {type : 'number', dist: 'string'}

const funcType = (type: Type) => {
  if (type.type === 'string') {
    console.log('string');
  } else {
    console.log('number');
  }
  if (type.type === 'number') return 0;
  return 1;
}

funcType(type);

console.log(type);

export { isFanc, trueFanc, trueFalseFunc, falseTrue, trueFlagFanc, falseFlagValue, Type }