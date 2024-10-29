const getFlag = (): boolean => {
  if(Math.random() > 0.5) {
    return true;
  } else {
    return false;
  }
}

const flag: boolean = getFlag();
console.log("flag", flag);

const rowParams = [
  {
    group_number: '23431223',
    onlyTrue: true,
  },
  {
    test_value: 'hello',
    onlyTrue: false,
  }
];

const sendParams = rowParams.filter(param => !param.onlyTrue || (param.onlyTrue && flag));

console.log(sendParams);

export {}