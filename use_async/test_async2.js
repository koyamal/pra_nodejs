async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("6(f: done!)"), 1500)
    });
    console.log('2');
    console.log(promise);
    let result = await promise;
    console.log(result);
}

async function g() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("5(g: done!)"), 1400)
  });
  console.log('4');
  console.log(promise);
  let result = await promise;
  console.log(result);
}

console.log('1');
f();
console.log('3');
g();