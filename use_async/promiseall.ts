function myPromise(num: number) {
  return new Promise(function(resolve) {
      setTimeout(() => { 
        resolve(num)
      }, 3000);
  });
}

const doPromiseAll = async () => {
  await Promise.all([
    myPromise(1),
    myPromise(2)
  ]);
}

doPromiseAll();
export {}