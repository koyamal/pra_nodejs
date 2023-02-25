{
    let a = 0;
    console.log(a);
}

// error
// console.log(a); 

{
    var b = 0;
    console.log(b);
}

console.log(b);

{
    function c (){
        console.log('c is called');
    }
    c();

    const d = function(){
        console.log('c is called');
    }
    d();
}

c();

// error
// d(); 