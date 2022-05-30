function a(){
    setTimeout(function task1(){
        console.log('task1 done');
    }, 4000);

    const startTime = new Date();
    while(new Date() - startTime < 6000);

    console.log('a done');
}

a();