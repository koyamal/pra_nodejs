function a(){
    setTimeout(function task1(){
        console.log('task1 done');
    }, 4000);

    setTimeout(function task2(){
        console.log('task2 done');
    }, 3000);

    setTimeout(function task3(){
        console.log('task3 done');
    }, 3500);

    const startTime = new Date();
    while(new Date() - startTime < 6000);

    console.log('a done');
}

a();