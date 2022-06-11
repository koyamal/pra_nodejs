async function fetchUsers(){
    const response = await fetch('users.json');
    if(response.ok){
        const json = await response.json();
        if(!json.length){
            throw new NoDataError('no data found');
            //throw new Error('no data found');
        }
        return json;
    }
}

class NoDataError extends Error{
    constructor(message){
        super(message);
        this.name = 'NoDataError';
    }
}

async function init(){
    try{
        const users = await fetchUsers();
        for(const user of users){
            console.log(`I'm ${user.name}, ${user.age} years old`);
        }
    }catch(e){
        if(e instanceof NoDataError){
            console.log('NoDataError');
            console.error(e);
        }else{
            console.log('Something Wrong');
        }
    } finally{
        console.log('bye');
    }
}

init();