const controller = require('./controller.js');

async function getUsers (req,res){
    try{
        var users = await controller.findAllUser();
        res.status(200).send(users);
        }
    catch(e){
        res.status(500).send('hubo un error' + e);
    }
}

module.exports={
    getUsers,
}