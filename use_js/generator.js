function* gen(){
    yield 1;
    yield 2;
    return 3;
}

const it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function* genIterator(max = 10){
    let i = 0;
    while(i < max){
        yield i++;
    }
    return;
}

const genIt = genIterator(10);

let a = genIt.next();
while(!a.done){
    console.log(a.value);
    a = genIt.next();
}