const checkTypeOf = (val: any) => {
  if(typeof val === 'string') {
    console.log(`${val}のtypeはstringです。`);
    return true;
  } else {
    console.log(`${val}のtypeは${typeof val}です。`);
    return false;
  }
}

checkTypeOf('');

checkTypeOf(undefined);

checkTypeOf(2);

checkTypeOf(null);