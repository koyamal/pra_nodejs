const metaTitle = '';

const checkTypeOf = (metaTitle: any) => {
  if(typeof metaTitle === 'string') {
    console.log('metaTitleのtypeはstringです。');
    return 'string';
  } else {
    console.log('metaTitleのtypeはstringではありません。');
    return 'not string';
  }
}

checkTypeOf(metaTitle);

checkTypeOf(undefined);