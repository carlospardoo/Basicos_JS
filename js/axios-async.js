const peticionu = async () =>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/5');
    console.log(data);
    return data;
};

const dataAxios = peticionu().then(console.log);
