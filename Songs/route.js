const controller = require('./controller.js');

//mostrar toda la lista de canciones
  async function getSongs (req,res){
    try{
        var songs = await controller.findAllSongs();
        res.status(200).send(songs);
        }
    catch(e){
        res.status(500).send('hubo un error al mostrar la lista de canciones' + e);
    }
};

//mostrar canción por nombre
async function getSongByName (req,res){
    try{
        const nameOneSong = req.params.name;
        const oneSong = await controller.findSong(nameOneSong);
        res.status(201).send(oneSong);
    }catch(e){
        res.status(500).send('hubo un error al mostrar la canción'+ e)
    }
};

//agregar una cancion a la lista
async function postSong (req,res){
    try{
        await controller.addSong(req.body);
        res.status(201).send('se aregó la canción');
    }catch(e){
        res.send('hubo un error al agregar la canción'+ e);
    }
};

//eliminar una cancion de la lista
async function deleteSong (req,res){
    try{
        const nameSong = req.params.name;
       await controller.deleteSong(nameSong);
        res.status(201).send('se eliminó la canción');
    }catch(e){
        res.status(500).send('hubo un error al eliminar la canción'+ e)
    }
};

//modificar una cancion de la lista
async function putSong (req,res){
    try{
        var nameSongs=req.params.name;
        var body = req.body;
        await controller.putSong(nameSongs,body );
        res.status(201).send('se modificó la canción');
    }catch(e){
        res.send('hubo un error al modificar la canción'+ e)
    }
}


module.exports={
    getSongs,
    getSongByName,
    postSong,
    deleteSong,
    putSong
}





