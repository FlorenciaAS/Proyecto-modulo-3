const model = require('./Model.js');

async function findAllUsers(){
    return await model.getAllUsers();
};

async function addUser(user){
    return await model.addUsers(user);
};

async function deleteUser(nameUser){
    return await model.deleteOneUser(nameUser);
};

async function putUser(nameUser, body){
    return await model.putOneUser(nameUser, body);
};

async function addSongFavorite (nameUser,bodySong){
    return await model.addOneSongFavorite(nameUser,bodySong);

};

async function deleteSongFavorite (nameUser, bodySong){
    return await model.deleteOneSongFavorite(nameUser, bodySong);
};

module.exports ={
    findAllUsers,
    addUser,
    deleteUser,
    putUser,
    addSongFavorite,
    deleteSongFavorite
};