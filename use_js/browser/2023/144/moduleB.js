// import { publicFn, publicVal } from "./moduleA.js";

// publicFn();

// import('./moduleA.js').then(function(modules){
//     console.log(modules);
//     modules.publicFn();
// })

async function fn(){
    const modules = await import('./moduleA.js');
    console.log(modules);
    modules.publicFn();
}

fn();