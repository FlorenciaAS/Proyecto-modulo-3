const controller = require('./Controller.js');

//mostrar toda la lista de usuariios
async function getUsers (req,res){
    try{
        var users = await controller.findAllUsers();
        res.status(200).send(users);
        }
    catch(e){
        res.status(500).send('hubo un error' + e);
    }
};

//agregar un usuario nuevo a la lista
async function postUser (req,res){
    try{
        await controller.addUser(req.body);
        res.status(201).send('se aregó el usuario');
    }catch(e){
        res.send('hubo un error al agregar un usuario');
    }
};

//eliminar un usuario de la lista
async function deleteUser (req,res){
    try{
        const nameUser = req.params.name;
       await controller.deleteUser(nameUser);
        res.status(201).send('se elimino el usuario');
    }catch(e){
        res.status(500).send('hubo un error al eliminar el usuario'+ e)
    }
};

//modificar un usuario de la lista
async function putUser (req,res){
    try{
        var nameUser=req.params.name;
        var body = req.body;
        await controller.putUser(nameUser,body );
        res.status(201).send('se modifico el usuario');
    }catch(e){
        res.send('hubo un error al modificar el usuario'+ e)
    }
};

//añadir una cancion favorita a la lista de usuarios
async function addSongFavorite (req.res){
    try{

    }catch(e){
        res.send('hubo un error al agregar la cancion a favoritos')
    }
};

//eliminar la cancion favorita de la lista de usuarios

module.exports={
    getUsers,
    postUser,
    deleteUser,
    putUser,
    addSongFavorite
};