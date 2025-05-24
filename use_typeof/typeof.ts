const checkTypeOf = (val: any): boolean => {
  console.log(`${val}のtypeは${typeof val}です。`);
  return typeof val === 'string';
}

const checkTypeOfIndex = (val: object) => {
  Object.keys(val).map((key) => {
    console.log(key);
  });
}

checkTypeOfIndex({a: 1, b: 2});

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