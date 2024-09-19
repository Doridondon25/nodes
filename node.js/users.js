const users= [
    {
    id: 1,
    name: 'dori donitza',
    age: 20,
},
{
    id:2,
    name:"itay lol",
    age: 21
}
];

const getUser = (id) =>{
    return users[id];
};

module.exports={
    users,
    getUser,
}