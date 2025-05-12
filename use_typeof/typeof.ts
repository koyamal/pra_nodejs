const checkTypeOf = (val: any) => {
  console.log(`${val}のtypeは${typeof val}です。`);
  return typeof val === 'string';
}

checkTypeOf('');

checkTypeOf(undefined);

checkTypeOf(2);

checkTypeOf(null);