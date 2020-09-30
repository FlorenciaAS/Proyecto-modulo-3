const { findUser } = require('./Controller.js');
const controller = require('./Controller.js');

//mostrar toda la lista de usuarios
async function getUsers (req,res){
    try{
        var users = await controller.findAllUsers();
        res.status(200).send(users);
        }
    catch(e){
        res.status(500).send('hubo un error al mostrar la lista de usuarios' + e);
    }
};

//mostrar usuario por nombre
async function getUserByName (req,res){
    try{
        const nameOneUser = req.params.name;
        const oneUser = await controller.findUser(nameOneUser);
        res.status(201).send(oneUser);
    }catch(e){
        res.status(500).send('hubo un error al mostrar el usuario'+ e)
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
        res.status(201).send('se eliminó el usuario');
    }catch(e){
        res.status(500).send('hubo un error al eliminar el usuario'+ e)
    }
};

//modificar un usuario de la lista
async function putUser (req,res){
    try{
        var nameUser=req.params.name;
        var body = req.body;
        await controller.putUser(nameUser,body);
        res.status(201).send('se modificó el usuario');
    }catch(e){
        res.send('hubo un error al modificar el usuario'+ e)
    }
};

//añadir una cancion favorita a un usuario
async function addSongFavorite (req,res){
    try{
      var nameUser= req.params.userName;
      var bodySong= req.body;
      console.log('id de cancion' + bodySong)
      await controller.addSongFavorite(nameUser, bodySong);
      res.status(201).send('se agrego la canción a favoritos del usuario');
    }catch(e){
        res.send('hubo un error al agregar la canción a favoritos del usuario' + e);
    }
};

//eliminar la cancion favorita del usuario
async function deleteSongFavorite (req, res){
    try{
        var nameUser= req.params.userName;
        var bodySong= req.params.songs;
        await controller.deleteSongFavorite(nameUser, bodySong);
        res.status(201).send('se eliminó la canción a favoritos del usuario');
    }catch(e){
        res.send('hubo un error al eliminar la canción a favoritos del usuario' + e);
    }
};

module.exports= {
    getUsers,
    getUserByName,
    postUser,
    deleteUser,
    putUser,
    addSongFavorite,
    deleteSongFavorite
}