const randValue = Math.random();

const getFlag = (value: number): boolean => {
  if(value > 0.5) {
    return true;
  } else {
    return false;
  }
}

const flag = getFlag(randValue);



export {}