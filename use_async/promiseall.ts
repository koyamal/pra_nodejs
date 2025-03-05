function myPromise(num: number) {
  return new Promise(function(resolve) {
      setTimeout(() => { 
        resolve(num)
      }, 3000);
  });
}

function myPromiseError(num: number) {
  return new Promise(function(resolve, rejects) {
      setTimeout(() => {
        try{
          throw new Error('error!');
        } catch(e) {
          if(num) rejects('resolve is called');
          rejects('rejects is called');
        }
      }, 1000);
  });
}

const doPromiseAll = async () => {
  try {
    await Promise.all([
      myPromise(1),
      myPromise(2),
      myPromiseError(3),
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