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
          resolve('resolve');
          rejects('rejects');
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
    console.log('after all');
  } catch(e) {
    console.log('before');
    console.log(e);
    console.log('after');
  }

}

doPromiseAll();
export {}