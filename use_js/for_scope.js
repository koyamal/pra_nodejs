for(let i = 0; i < 5; i++){
    const j = i * 2;
    setTimeout(function(){
        console.log(j);
    },1000);
}

let k;
for(let i = 0; i < 5; i++){
    k = i * 2;
    setTimeout(function(){
        console.log(k);
    },2000);
}