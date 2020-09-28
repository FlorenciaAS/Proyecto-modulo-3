const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var songsSchema = new Schema({
    name: String,  
    album:String,
    duration: String,
    artist: String
});

var Song = mongoose.model('Proyecto-mod3', songsSchema, 'songs');

async function getAllSongs(){
    return await Song.find({});
};

async function addSongs(song){
    var newSong= new Song(song);
    await newSong.save();
};

module.exports={
    getAllSongs,
    addSongs,
}