const controller = require('./Controller.js');

async function getUsers (req,res){
    try{
        var users = await controller.findAllUsers();
        res.status(200).send(users);
        }
    catch(e){
        res.status(500).send('hubo un error' + e);
    }
};

async function postUser (req,res){
    try{
        await controller.addUser(req.body);
        res.status(201).send('se aregó el usuario');
    }catch(e){
        res.send('hubo un error al agregar un usuario');
    }
};

module.exports={
    getUsers,
    postUser
};