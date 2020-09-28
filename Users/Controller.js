const model = require('./Model.js');

async function findAllUsers(){
    return await model.getAllUsers();
}


module.exports ={
    findAllUsers,
};