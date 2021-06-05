const petcione = async () => {
    console.log('work');
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //const data = response.json(); //json es una promesa
    const data = await response.json(); //json es una promesa
    console.log(response);
    console.log(data);
    return data;
};

const daita = petcione().then(console.log);
//console.log(daita);
