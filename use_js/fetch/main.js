fetch('users.json').then(function(response){
    console.log(response);
    return response.json();
}).then(function(json){
    console.log(json);
    for(const user of json){
        console.log(`I'm ${user.name}, ${user.age} years old`)
    }
});