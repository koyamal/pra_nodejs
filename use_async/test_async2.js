async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("6(f: done!)"), 1500)
      //setTimeout(() => resolve(console.log("hello")), 1000)
    });
    console.log('2');
    console.log(promise);
    let result = await promise;
    //console.log("6");
    console.log(result);
}

async function g() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("5(g: done!)"), 1400)
    //setTimeout(() => resolve(console.log("hello")), 1000)
  });
  console.log('4');
  console.log(promise);
  let result = await promise;
  //console.log("5");
  console.log(result);
}

console.log('1');
f();
console.log('3');
g();