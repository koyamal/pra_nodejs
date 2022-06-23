function a(){
    let b = 0;
    console.log(b);
}
//console.log(b);
// error

a();

{
    let c = 1;
    console.log(c);

    function d(){
        console.log('d is called');
    }

    const e = function(){
        console.log('e is called');
    }
    e();
}
//console.log(c);
// error

d();

//e();
// error