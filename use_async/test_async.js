function myPromise(num) {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve(num * num) }, 3000)
    });
}

function testasync(text){
    return setTimeout(function(){ console.log(text)}, 3000);
}

async function myAsync() {
    console.log('start');
    const result = await myPromise(10);
    console.log(result);
    const output = await testasync('Hello');
    console.log('end');
}
 
myAsync();