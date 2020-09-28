const model = require('./Model.js');

async function findAllUsers(){
    return await model.getAllUsers();
};

async function addUser(user){
    return await model.addUsers(user);
};


module.exports ={
    findAllUsers,
    addUser
};