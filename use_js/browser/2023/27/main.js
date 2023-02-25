

function increment(){
    let c = 0;
    function a(){
        c = c + 1;
        console.log(c);
    }

    return a;
};


const b = increment();

b();
b();
b();