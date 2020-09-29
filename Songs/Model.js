const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var songsSchema = new Schema({
    name: String,  
    album:String,
    duration: String,
    artist: String
});

var Song = mongoose.model('Song', songsSchema);

async function getAllSongs(){
    return await Song.find({});
};

async function addSongs(song){
    var newSong= new Song(song);
    await newSong.save();
};


async function deleteOneSong (nameSong){
     return await Song.findOneAndDelete({name:nameSong});
};


async function putOneSong (nameSong, body){
    return await Song.findOneAndUpdate(nameSong, body);
};


module.exports={
    getAllSongs,
    addSongs,
    Song,
    deleteOneSong,
    putOneSong
    
}