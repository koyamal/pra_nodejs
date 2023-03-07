// try{
//     console.log('start');
//     // throw new Error('error message');
//     console.log('end');
// }catch(e){
//     console.log(e);
// }finally{
//     console.log('bye');
// }

async function fetchUsers(){
    const response = await fetch('./users.json');
    const json = await response.json();

    return json;
}

async function init(){
    const users = await fetchUsers();

    for(const user of users){
        console.log(`I'm ${user.name}, ${user.age} years old`);
    }
}

init();