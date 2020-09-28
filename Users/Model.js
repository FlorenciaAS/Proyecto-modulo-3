const mongoose = require('mongoose');
const songModel = require('../Songs/model');

const Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,  
    lastName:String,
    mail: String,
    age: String,
    favoriteSongs:[{ type: Schema.Types.ObjectId, ref: 'Song' }]
    
});

var User = mongoose.model('User', usersSchema);

async function getAllUsers(){
    return await User.find({}).populate('favoriteSongs');
};


async function addUsers(user){
    var newUser= new User(user);
    await newUser.save();
};


module.exports={
    getAllUsers, 
    addUsers
};
