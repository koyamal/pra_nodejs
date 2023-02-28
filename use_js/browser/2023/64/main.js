function a(){
    console.log('Hello ', this.name);
}

const tim = {name: 'Tim'};

const b = a.bind(tim);
b();

a.apply(tim);