const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,  
    lastName:String,
    mail: String,
    age: String,
    
});

//var User = mongoose.model('Proyecto-mod3', usersSchema, 'users');

async function getAllUsers(){
    return await User.find({});
};


module.exports={
    getAllUsers, 
}
