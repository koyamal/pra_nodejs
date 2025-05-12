const checkTypeOf = (val: any) => {
  console.log(`${val}のtypeは${typeof val}です。`);
  if(typeof val === 'string') {
    return true;
  } else {
    return false;
  }
}

checkTypeOf('');

checkTypeOf(undefined);

checkTypeOf(2);

checkTypeOf(null);