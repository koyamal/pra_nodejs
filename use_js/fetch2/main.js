async function fetchLocal(){
    const response = await fetch('http://localhost:3000/add_fruit_temp', {method: 'POST', body: {a: 'from_another_origin'}});
    console.log(response);
}

fetchLocal();