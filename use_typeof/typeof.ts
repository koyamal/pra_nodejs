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
  console.log('logkeyvalue');
  Object.keys(val).forEach(key => {
    console.log(key, val[key as keyof object]);
  });
}

const logValues = (val: object) => {
  Object.values(val).forEach(value => {
    console.log(value);
  });
}

logKeys({a: 1, b: 2, c: 3, d: "4"});
logKeys({a: 1, b: 2, c: 3, d: "4"});
logKeyAndValue({a: 1, b: 2, c: 3, d: "4"});
logValues({a: 1, b: 2, c: 3, d: "4"});

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