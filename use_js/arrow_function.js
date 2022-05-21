function a(name){
    return 'hello ' + name; 
}

// anonymous function
const b = function(name){
    return 'hello ' + name;
}

// arrow function
const c = (name) =>{
    return 'hello ' + name;
}

// 1 argument
const d = name =>{
    return 'hello ' + name;
}

// 1 sentence
const e = name => 'hello ' + name;

console.log(e('Koya'));