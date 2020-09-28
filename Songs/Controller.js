const model = require('./model.js');

async function findAllSongs(){
    return await model.getAllSongs();
};

async function addSong(song){
    return await model.addSongs(song);
};

module.exports ={
    findAllSongs,
    addSong
}; 