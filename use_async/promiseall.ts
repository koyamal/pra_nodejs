function myPromise(num: number) {
  return new Promise(function(resolve) {
      setTimeout(() => { 
        resolve(num)
      }, 3000);
  });
}

function myPromiseError(num: number) {
  return new Promise(function(resolve) {
      setTimeout(() => { 
        throw Error('error');
      }, 3000);
  });
}

const doPromiseAll = async () => {
  try {
    await Promise.all([
      myPromise(1),
      myPromise(2),
      myPromiseError(3),
    ]);
  } catch(e) {
    console.log(e);
    console.log('hello');
  }

}

doPromiseAll();
export {}