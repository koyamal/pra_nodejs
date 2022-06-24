d_increment();
d_increment();
d_increment();


function d_increment(){
    let num = 0;
    num = num +1;
    console.log(num);
}

function incrementFactroy(){
    let num = 0;

    function increment(){
        num = num + 1;
        console.log(num);
    }

    return increment;
}

const increment = incrementFactroy();
increment();
increment();
increment();

const increment2 = incrementFactroy();
increment2();
increment2();

increment();