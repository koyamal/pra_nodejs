const checkTypeOf = (val: any): boolean => {
  console.log(`${val}のtypeは${typeof val}です。`);
  return typeof val === 'string';
}

const logKeys = (val: object) => {
  Object.keys(val).map((key) => {
    console.log(key);
  });
}

logKeys({a: 1, b: 2, c: 3});

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