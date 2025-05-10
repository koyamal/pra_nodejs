const checkTypeOf = (val: any) => {
  if(typeof val === 'string') {
    console.log('typeはstringです。');
    return 'string';
  } else {
    console.log('typeはstringではありません。');
    console.log(`typeは${typeof val}です。`);
    return 'not string';
  }
}

checkTypeOf('');

checkTypeOf(undefined);

checkTypeOf(2);