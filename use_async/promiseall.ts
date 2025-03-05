function myPromise(num: number) {
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
    ]);
    console.log('after Promise.all');
  } catch(e) {
    console.log('Promise.allでエラーをキャッチ');
    console.log(e);
    console.log('Promise.allのcatchの最終行');
  }

}

doPromiseAll();
export {}