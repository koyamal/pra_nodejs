//console.log(window.fetch('./users.json'));

fetch('./users.json').then(function(response){
    console.log(response);
    return response.json();
}).then(function(json){
    console.log(json);
    for(const user of json){
        console.log(`I'm ${user.name}, ${user.age} years old`);
    }
})


// async function fetchUser(){
//     const a = await fetch('./users.json')
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(json){
//         console.log(json);
//         for(const user of json){
//             console.log(`I'm ${user.name}, ${user.age} years old`);
//         }
//     })
// }

// fetchUser();

async function fetchUsers(){
    const response = await fetch('./users.json');
    const json = await response.json();
    for(const user of json){
        console.log(`I'm ${user.name}, ${user.age} years old`);
    }
}

fetchUsers();