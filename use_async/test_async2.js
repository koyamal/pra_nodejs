async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("f: done!"), 1500)
      //setTimeout(() => resolve(console.log("hello")), 1000)
    });
    console.log('2');
    console.log(promise);
    let result = await promise;
    console.log("6");
    console.log(result, promise);
}

async function g() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("g: done!"), 1000)
    //setTimeout(() => resolve(console.log("hello")), 1000)
  });
  console.log('4');
  console.log(promise);
  let result = await promise;
  console.log("5");
  console.log(result, promise);
}

console.log('1');
f();
console.log('3');
g();