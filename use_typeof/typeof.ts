const checkTypeOf = (val: any) => {
  if(typeof val === 'string') {
    console.log('typeはstringです。');
    return 'string';
  } else {
    console.log('typeはstringではありません。');
    return 'not string';
  }
}

checkTypeOf('');

checkTypeOf(undefined);

checkTypeOf(2);