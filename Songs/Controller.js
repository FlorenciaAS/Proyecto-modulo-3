const model = require('./model.js');

async function findAllSongs(){
    return await model.getAllSongs();
};

async function addSong(song){
    return await model.addSongs(song);
};

async function deleteSong(nameSong){
    return await model.deleteOneSong(nameSong);
};

async function putSong(nameSong, body){
    return await model.putOneSong(nameSong, body);
}



module.exports ={
    findAllSongs,
    addSong,
    deleteSong,
    putSong
}; 