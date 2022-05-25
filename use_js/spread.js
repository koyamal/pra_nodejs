const arry1 = [1,2,3,4,5];
const arry2 = [...arry1];
const arry3 = [...arry1, 6];

console.log('arry1: ', arry1);
console.log('arry2: ', arry2);
console.log('arry1 === arry2: ', arry1 === arry2); //false

console.log('arry3: ', arry3);

function sum(...args){
    let ret = 0;
    for(let v of args){
        ret += v;
        //console.log(v);
    }
    return ret
}

const result = sum(1,2,3,4);
console.log(result);