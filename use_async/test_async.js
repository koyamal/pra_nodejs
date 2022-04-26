function myPromise(num) {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve(num * num) }, 3000)
    })
}

async function myAsync() {
    console.log('start');
    const result = await myPromise(10);
    console.log(result);
    console.log('end');
}
 
myAsync();