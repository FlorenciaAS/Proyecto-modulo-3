const controller = require('./controller.js');

//mostrar toda la lista de canciones
  async function getSongs (req,res){
    try{
        var songs = await controller.findAllSongs();
        res.status(200).send(songs);
        }
    catch(e){
        res.status(500).send('hubo un error' + e);
    }
};

//agregar una cancion a la lista
async function postSong (req,res){
    try{
        await controller.addSong(req.body);
        res.status(201).send('se aregó la cancion');
    }catch(e){
        res.send('hubo un error al agregar la cancion'+ e);
    }
};

//eliminar una cancion de la lista
async function deleteSong (req,res){
    try{
        const nameSong = req.params.name;
       await controller.deleteSong(nameSong);
        res.status(201).send('se elimino la cancion');
    }catch(e){
        res.status(500).send('hubo un error al eliminar la cancion'+ e)
    }
};

//modificar una cancion de la lista
async function putSong (req,res){
    try{
        var nameSongs=req.params.name;
        var body = req.body;
        await controller.putSong(nameSongs,body );
        res.status(201).send('se modifico la cancion');
    }catch(e){
        res.send('hubo un error al modificar la cancion'+ e)
    }
}


module.exports={
    getSongs,
    postSong,
    deleteSong,
    putSong
}





