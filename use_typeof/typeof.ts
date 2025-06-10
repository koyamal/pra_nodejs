const checkTypeOf = (val: any): boolean => {
  console.log(`${val}のtypeは${typeof val}です。`);
  return typeof val === 'string';
}

const logKeys = (val: object) => {
  Object.keys(val).forEach(key => {
    console.log(key, val[key as keyof object]);
  });
}

const logKeyAndValue = (val: object) => {
  console.log('log key and value');
  Object.keys(val).forEach(key => {
    console.log(key, val[key as keyof object]);
  });
}

const logValues = (val: object) => {
  Object.values(val).forEach(value => {
    console.log(value);
  });
}
const logValueOut = (val: any) => {
  if(typeof val === 'object') {
    Object.values(val).forEach(value => {
      console.log(value);
    });
  }
  return val;
}

const logValue = (val: any) => {
  if(typeof val === 'object') {
    Object.values(val).forEach(value => {
      console.log(value);
    });
  }
  return val;
}

const logObjectData = (val: any) => {
  if(typeof val === 'object') {
    Object.values(val).forEach(value => {
      console.log(value);
    });
    return 0;
  } else if (typeof val === 'string'){
    return '';
  }
  return val;
}

logKeys({a: 1, b: 2, c: 3, d: "4", e: false, g: null});
logKeys({a: 1, c: 2, ce: 3, d: "4", e: false, g: null});
logKeys({a: 1, b: 2, c: 3, d: "4"});
logKeyAndValue({a: 1, b: 2, c: 3, d: "4"});
logKeyAndValue({a: 1, b: 2, c: 3, d: "4"});
logValues({a: 1, b: 22, c: 3, d: "4"});
logValues({a: 1, b: 22, c: 3, d: "4"});
logValues({a: 1, b: 2, c: 3, d: "4"});
logValues({a: 1, b: 2, c: 3, d: "4"});
logValues({a: 1, b: 2, c: 3, d: "4"});
logValues({d: 1, b: 2, c: 3, dd: "4"});

checkTypeOf('');

checkTypeOf('hello');

checkTypeOf(undefined);

checkTypeOf({undefined});

checkTypeOf(2);

checkTypeOf(null);

checkTypeOf(true);

checkTypeOf(false);

checkTypeOf(NaN);

checkTypeOf({});

checkTypeOf([]);

checkTypeOf(() => {});

checkTypeOf(() => '');