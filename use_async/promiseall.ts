function myPromise(num: number) {
  return new Promise(function(resolve) {
      setTimeout(() => { 
        resolve(num)
      }, 500);
  });
}

function myGetPromise(num: number) {
  return new Promise(function(resolve) {
      setTimeout(() => { 
        resolve(num)
      }, 500);
  });
}

function myPromiseError(num: number) {
  return new Promise(function(resolve, rejects) {
      setTimeout(() => {
        try{
          throw new Error('error!');
        } catch(e) {
          if(num) resolve('resolve is called');
          rejects('rejects is called');
        }
      }, 500);
  });
}

const doPromiseAll = async () => {
  try {
    await Promise.all([
      myPromise(1),
      myPromise(2),
      myPromiseError(0),
      myPromiseError(1),
      myPromiseError(2),
    ]);
    console.log('after Promise.all');
  } catch(e) {
    console.log('Promise.allでエラーをキャッチ');
    console.log(e);
    console.log('Promise.allのcatchの最終行');
  }

}

const doPromiseAllResolve = async (num: number) => {
  console.log(`${num} is start`);
  const res = await myPromise(num);
  console.log(`${num} is done: res=${res}`);
}

const doPromiseAllSettled = async () => {
  try {
    const res = await Promise.allSettled([
      myPromise(1),
      myPromise(1),
      myPromise(2),
      myPromiseError(0),
      myPromiseError(1),
      myPromiseError(2),
    ]);
    console.log('after Promise.all');
    console.log(res);
  } catch(e) {
    console.log('Promise.allでエラーをキャッチ');
    console.log(`エラー内容：${e}`);
    console.log('Promise.allのcatchの最終行');
  }

}

(async() => {
  console.log('Promise.all is start');
  await Promise.all([
    doPromiseAllResolve(1),
    doPromiseAllResolve(2),
    doPromiseAllResolve(3),
    doPromiseAllSettled(),
    doPromiseAllSettled(),
    myGetPromise(1)
  ]);
  console.log('Promise.all is done');
})()
export {}