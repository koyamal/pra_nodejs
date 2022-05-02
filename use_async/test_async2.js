async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1500)
      //setTimeout(() => resolve(console.log("hello")), 1000)
    });
    console.log('2');
    console.log(promise);
    let result = await promise;
    console.log("4");
    console.log(result, promise);
}

console.log('1');
f();
console.log('3');