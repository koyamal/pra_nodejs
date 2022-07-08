window.name = 'John';
const person = {
    name: 'Tom',
    hello: function(){
        console.log('Hello ' + this.name);
        a();
        //console.log('hello ' + person.name);
    }
}

// const ref = person.hello;
// ref();

person.hello();
function a(){
    console.log('Hello ' + this.name);
}