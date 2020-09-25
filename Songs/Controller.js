const model = require('./model.js');

async function findAllSongs(){
    return await model.getAllSongs();
};

module.exports ={
    findAllSongs,

};